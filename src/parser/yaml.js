export {parseYaml};
import pkg from 'js-yaml';
const {safeLoad} = pkg;

const parseYaml = function (content, options) {
  const {filename} = {
    filename: ``,
    ...options,
  };
  return safeLoad(content, {filename});
};

