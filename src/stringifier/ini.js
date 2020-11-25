export {stringifyIni};
import {encode} from 'ini';

const stringifyIni = function(data, options) {
  const {pretty} = {
    pretty: false,
    ...options,
  };
  return encode(data, {
    whitespace: pretty,
  });
};

