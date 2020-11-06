import {parserToLoader, parserToAsyncLoader} from '../utils/parser-to-loader.js'

import {parseYaml} from '../parser/yaml.js'
import {parseJson5} from '../parser/json5.js'
import {parseJson} from '../parser/json.js'
import {parseToml} from '../parser/toml.js'
import {parseIni} from '../parser/ini.js'

const parsers = {
  yaml: parseYaml,
  json5:parseJson5,
  json: parseJson,
  toml: parseToml,
  ini: parseIni,
}
import {loadCjs} from './cjs.js'
import esm from './esm.cjs'

const yaml = parserToLoader(parsers.yaml)
const json5 = parserToLoader(parsers.json5)
const toml = parserToLoader(parsers.toml)
const ini = parserToLoader(parsers.ini)
const json = parserToLoader(parsers.json)
const js = esm

const yamlAsync = parserToAsyncLoader(parsers.yaml)
const json5Async = parserToAsyncLoader(parsers.json5)
const tomlAsync = parserToAsyncLoader(parsers.toml)
const iniAsync = parserToAsyncLoader(parsers.ini)
const jsonAsync = parserToAsyncLoader(parsers.json)

yaml.defaultExtension = 'yaml'
yamlAsync.defaultExtension = 'yaml'
json5.defaultExtension = 'json5'
json5Async.defaultExtension = 'json5'
toml.defaultExtension = 'toml'
tomlAsync.defaultExtension = 'toml'
ini.defaultExtension = 'ini'
iniAsync.defaultExtension = 'ini'
json.defaultExtension = 'json'
jsonAsync.defaultExtension = 'json'

js.defaultExtension = 'js'
loadCjs.defaultExtension = 'cjs'

const all = [
  esm,
  js,
  yaml,
  json5,
  toml,
  loadCjs,
  json,
  ini,
]

const allAsync = [
  yamlAsync,
  json5Async,
  tomlAsync,
  jsonAsync,
  iniAsync,
]

const supportedExtensions =  all.map(loader => {
  return loader.defaultExtension;
}).filter(Boolean);

export {
    esm,
    js,
    yaml,
    json5,
    toml,
    loadCjs as cjs,
    json,
    ini,
    all,

    yamlAsync,
    json5Async,
    tomlAsync,
    iniAsync,
    jsonAsync,
    allAsync,

    supportedExtensions
}
