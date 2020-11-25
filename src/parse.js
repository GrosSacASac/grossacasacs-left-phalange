
export { parse };
import {parseYaml} from './parser/yaml.js';
import {parseJson5} from './parser/json5.js';
import {parseJson} from './parser/json.js';
import {parseToml} from './parser/toml.js';
import {parseIni} from './parser/ini.js';

const parser = {
  yaml: parseYaml,
  json5:parseJson5,
  json: parseJson,
  toml: parseToml,
  ini: parseIni,
};

const parse = function (string, options = {}) {
  if (typeof options === `string`) {
    options = {
      type: options,
    };
  }

  return parser[options.type || `yaml`](string, options);
};
