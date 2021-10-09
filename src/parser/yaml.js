export {parseYaml};
import pkg from 'js-yaml';
const {load} = pkg;

const parseYaml = function (content, options) {
  const {filename} = {
    filename: ``,
    ...options,
  };
  return load(content, {filename});
};

