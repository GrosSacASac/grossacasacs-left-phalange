export {stringifyYaml};
import pkg from 'js-yaml';
const {safeDump} = pkg;

const stringifyYaml = function (data, options) {
  const {pretty, sort} = {
    pretty: false,
    sort: false,
    ...options,
  };

  return safeDump(data, {
    noArrayIndent: !pretty,
    sortKeys: sort,
    lineWidth: pretty ? 80 : -1,
  });
};

