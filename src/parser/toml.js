export {parseToml};
import {parse} from '@iarna/toml';

const parseToml = function (content /* , options */) {
  return parse(content);
};

