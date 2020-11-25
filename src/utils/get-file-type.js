export { getFileType};
import {extname} from 'path';

const fileTypes = {
  '.mjs': `esm`,
  '.yml': `yaml`,
};

const getFileType = function(file) {
  const extension = extname(file);

  return fileTypes[extension] || extension.slice(1);
};

