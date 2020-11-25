export {loadCjs};
import importFresh from 'import-fresh';

const loadCjs = function (file /* , options */) {
  return importFresh(file);
};

