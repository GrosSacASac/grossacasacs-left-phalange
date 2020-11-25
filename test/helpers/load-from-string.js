import {sync as temporaryWrite} from 'temp-write';
import {load} from '../../src/index.js';

const loadFileFromString = function(string, fileName, options) {
  const file = temporaryWrite(string, fileName);
  return load(file, options);
};

export {loadFileFromString};
