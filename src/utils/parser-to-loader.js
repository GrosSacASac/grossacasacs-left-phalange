export {parserToLoader, parserToAsyncLoader};
import {readFileSync} from 'fs';
import {readFile} from "fs/promises";

const parserToLoader = function (parser) {
  return function loader(filename, options) {
    const content = readFileSync(filename, `utf8`);

    return parser(content, {
      filename,
      ...options,
    });
  };
};

const parserToAsyncLoader = function (parser) {
  return function loader(filename, options) {
    return readFile(filename, `utf8`).then(content => {
      return parser(content, {
        filename,
        ...options,
      });
    });
  };
};
