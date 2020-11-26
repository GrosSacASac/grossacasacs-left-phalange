export {stringifyYaml};
import pkg from 'js-yaml';
const {safeDump} = pkg;

const stringifyYaml = function (data, options) {
  const {pretty, sort} = {
    pretty: false,
    sort: false,
    ...options,
  };

  let lineWidth;
  if (pretty) {
    lineWidth = 80; /* eslint-disable-line */
  } else {
    lineWidth = -1;
  } 
  return safeDump(data, {
    noArrayIndent: !pretty,
    sortKeys: sort,
    lineWidth,
  });
};

