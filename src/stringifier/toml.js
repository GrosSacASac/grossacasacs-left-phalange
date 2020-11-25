export {stringifyToml};
import {stringify} from '@iarna/toml';

const stringifyToml = function (data /* , options */) {
  return stringify(data);
};

