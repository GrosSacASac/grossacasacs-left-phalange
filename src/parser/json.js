export {parseJson};
import parse from 'parse-json';


const parseJson = function (content, options) {
  const {filename} = {
    filename: undefined,
    ...options,
  };
  return parse(content, filename);
};
