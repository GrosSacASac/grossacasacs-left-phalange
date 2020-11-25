export {stringifyCjs};
import {stringifyJson5} from './json5.js';

const stringifyCjs = function (data, options) {
  return `module.exports = ${stringifyJson5(data, options)};`;
};

