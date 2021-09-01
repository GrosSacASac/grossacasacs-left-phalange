
export {load, loadAsync, supportedExtensions};


import {parseYaml} from '../parser/yaml.js';
import {parseJson5} from '../parser/json5.js';
import {parseJson} from '../parser/json.js';
import {parseToml} from '../parser/toml.js';
import {parseIni} from '../parser/ini.js';
import {getFileType} from "../utils/get-file-type-deno.js";
  
const parserToLoader = function (parser) {
    return function loader(filename, options) {
      const content = Deno.readTextFileSync(filename);
  
      return parser(content, {
        filename,
        ...options,
      });
    };
  };

const parserToAsyncLoader = function (parser) {
return function loader(filename, options) {
    return Deno.readTextFile(filename).then(content => {
      return parser(content, {
          filename,
          ...options,
      });
    });
};
};


const parsers = {
yaml: parseYaml,
json5:parseJson5,
json: parseJson,
toml: parseToml,
ini: parseIni,
};

const yaml = parserToLoader(parsers.yaml);
const json5 = parserToLoader(parsers.json5);
const toml = parserToLoader(parsers.toml);
const ini = parserToLoader(parsers.ini);
const json = parserToLoader(parsers.json);

const yamlAsync = parserToAsyncLoader(parsers.yaml);
const json5Async = parserToAsyncLoader(parsers.json5);
const tomlAsync = parserToAsyncLoader(parsers.toml);
const iniAsync = parserToAsyncLoader(parsers.ini);
const jsonAsync = parserToAsyncLoader(parsers.json);

const loaders = {
yaml ,
json5 ,
toml ,
ini ,
json ,
yamlAsync, 
json5Async, 
tomlAsync,
iniAsync ,
jsonAsync ,
};

yaml.defaultExtension = `yaml`;
yamlAsync.defaultExtension = `yaml`;
json5.defaultExtension = `json5`;
json5Async.defaultExtension = `json5`;
toml.defaultExtension = `toml`;
tomlAsync.defaultExtension = `toml`;
ini.defaultExtension = `ini`;
iniAsync.defaultExtension = `ini`;
json.defaultExtension = `json`;
jsonAsync.defaultExtension = `json`;


const all = [
yaml,
json5,
toml,
json,
ini,
];

const allAsync = [
yamlAsync,
json5Async,
tomlAsync,
jsonAsync,
iniAsync,
];

const supportedExtensions =  all.map(loader => {
return loader.defaultExtension;
}).filter(Boolean);



const prepareArgument = function(file, options = {}) {
  if (typeof options === `string`) {
    options = {
      type: options,
    };
  }

  const {type = getFileType(file)} = options;
  const extension = getFileType(file);
  
  return { extension, type};

};


const load = function (file, options) {
  const { extension, type} = prepareArgument(file, options);

  if (extension) {
    const used = type || extension;
    if (!loaders[used]) {
        return new Error(`unsupported "${used}"`);
    }
    return loaders[used](file);
  }

  // if file is config, try to open config.json or config.yaml or config.toml
  let result = new Error(`Unable to open ${file}`); // in case it cannot be found
  all.some((specificLoader) => {
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
    return loaders[`${type || extension}Async`](file);
  }

  // if file is config, try to open config.json or config.yaml or config.toml
  return Promise.any(allAsync.map((specificAsyncLoader) => {
      return specificAsyncLoader(`${file}.${specificAsyncLoader.defaultExtension}`);
  })).catch((/*aggregateError*/) => {
    throw new Error(`Unable to open ${file}`);
  });
};
