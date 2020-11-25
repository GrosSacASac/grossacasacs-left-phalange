export {parseIni};
import {decode} from 'ini';


const parseIni = function (content /* , options */) {
  return decode(String(content));
};
