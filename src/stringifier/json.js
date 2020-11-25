export {stringifyJson};
const stringifyJson = function (data, options) {
  const {pretty} = {
    pretty: false,
    ...options,
  };
  if (pretty) {
    return JSON.stringify(data, undefined, 2);
  }
  return JSON.stringify(data);
};

