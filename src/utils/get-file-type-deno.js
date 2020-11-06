export { getFileType}

const fileTypes = {
  '.mjs': 'esm',
  '.yml': 'yaml',
}

function getFileType(file) {
  let extension;
  if (file.includes(`.`)) {
    const fileSplit = file.split(`.`);
    extension = fileSplit[fileSplit.length-1];
  } else {
    extension = ``;
  }
  return fileTypes[extension] || extension
}

