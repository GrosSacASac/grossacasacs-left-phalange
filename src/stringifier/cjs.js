import json5Stringify from './json5'

function stringifyCjs(data, options) {
  return `module.exports = ${json5Stringify(data, options)};`
}

export default stringifyCjs
