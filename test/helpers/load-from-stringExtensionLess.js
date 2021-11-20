export {loadFileFromStringExtensionLess};
import {parse as parsePath, format as formatPath} from 'node:path';
import tempWrite from 'temp-write';
import {load} from '../../src/index.js';

const loadFileFromStringExtensionLess = function(string, fileName, options) {
  const file = tempWrite.sync(string, fileName);
  // remove extension
  const parsed = parsePath(file);
  parsed.ext = ``;
  const extensionLess = formatPath(parsed);
  return load(extensionLess, options);
};

