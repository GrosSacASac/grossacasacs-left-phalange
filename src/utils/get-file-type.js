export { getFileType};
import path from 'node:path';

const fileTypes = {
  '.mjs': `esm`,
  '.yml': `yaml`,
};

const getFileType = function(file) {
  const extension = path.extname(file);

  return fileTypes[extension] || extension.slice(1);
};

