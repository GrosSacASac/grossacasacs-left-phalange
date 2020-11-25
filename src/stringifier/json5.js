export {stringifyJson5};
import pkg from 'json5';
const {stringify} = pkg;

const stringifyJson5 = function (data, options) {
  const {pretty} = {
    pretty: false,
    ...options,
  };
  if (pretty) {
    return stringify(data, undefined, 2);
  }
  return stringify(data);
};

