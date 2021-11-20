export {parserToLoader, parserToAsyncLoader};

import fs from 'node:fs';
import fsPromises from "node:fs/promises";


const parserToLoader = function (parser) {
  return function loader(filename, options) {
    const content = fs.readFileSync(filename, `utf8`);

    return parser(content, {
      filename,
      ...options,
    });
  };
};

const parserToAsyncLoader = function (parser) {
  return function loader(filename, options) {
    return fsPromises.readFile(filename, `utf8`).then(content => {
      return parser(content, {
        filename,
        ...options,
      });
    });
  };
};
