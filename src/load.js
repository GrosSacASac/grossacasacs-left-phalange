

export {load, loadAsync, supportedExtensions};

import {parse as parseFile} from 'path';
import * as loader from './loader/index.js';
import { supportedExtensions } from './loader/index.js';
import {getFileType} from './utils/get-file-type.js';

const prepareArgument = function(file, options = {}) {
  if (typeof options === `string`) {
    options = {
      type: options,
    };
  }

  const {type = getFileType(file)} = options;
  const parsed = parseFile(file);
  const extension = parsed.ext.slice(1); // slice(1) to remove the dot

  return { extension, type};

};


const load = function (file, options) {
  const { extension, type} = prepareArgument(file, options);

  if (extension) {
    return loader[type || extension](file);
  }

  // if file is config, try to open config.json or config.yaml or config.toml
  let result = new Error(`Unable to open ${file}`); // in case it cannot be found
  loader.all.some((specificLoader) => {
    try {
      result = specificLoader(`${file}.${specificLoader.defaultExtension}`);
      return true; // stop trying when successful
    } catch (error) {
      // most likely a file not found error
    }
  });
  return result;
};


const loadAsync = function (file, options) {
  const { extension, type} = prepareArgument(file, options);

  if (extension) {
    return loader[`${type || extension}Async`](file);
  }

  // if file is config, try to open config.json or config.yaml or config.toml
  return Promise.any(loader.allAsync.map((specificAsyncLoader) => {
      return specificAsyncLoader(`${file}.${specificAsyncLoader.defaultExtension}`);
  })).catch(aggregateError => {
    throw new Error(`Unable to open ${file}`);
  });
};
