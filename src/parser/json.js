
export {parseJson};
import parse from 'parse-json';

function parseJson(content, options) {
  const {filename} = {
    filename: undefined,
    ...options,
  };
  return parse(content, filename);
}

export default parseJson;
