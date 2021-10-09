import tempWrite from 'temp-write';
import {load} from '../../src/index.js';

const loadFileFromString = function(string, fileName, options) {
  const file = tempWrite.sync(string, fileName);
  return load(file, options);
};

export {loadFileFromString};
