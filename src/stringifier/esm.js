export {stringifyEsm};
import {stringifyJson5} from './json5.js';

const stringifyEsm = function (data, options) {
  return `export default ${stringifyJson5(data, options)};`;
};

