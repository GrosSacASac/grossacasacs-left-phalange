export {parserToLoader, parserToAsyncLoader};
import {readFileSync} from 'fs'
import {readFile} from "fs/promises";

function parserToLoader(parser) {
  return function loader(filename, options) {
    const content = readFileSync(filename, 'utf8')

    return parser(content, {
      filename,
      ...options,
    })
  }
}

function parserToAsyncLoader(parser) {
  return function loader(filename, options) {
    return readFile(filename, 'utf8').then(content => {
      return parser(content, {
        filename,
        ...options,
      })
    });
  }
}
