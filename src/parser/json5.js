export {parseJson5};
import pkg from 'json5';
const {parse} = pkg;

const parseJson5 = function (content /* , options */) {
  return parse(content);
};

