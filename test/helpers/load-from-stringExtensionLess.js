import {sync as temporaryWrite} from 'temp-write'
import {parse as parsePath, format as formatPath} from 'path'
import {load} from '../../src/index.js'

function loadFileFromStringExtensionLess(string, fileName, options) {
  const file = temporaryWrite(string, fileName)
  // remove extension
  const parsed = parsePath(file)
  parsed.ext = ''
  const extensionLess = formatPath(parsed)
  return load(extensionLess, options)
}

export default loadFileFromStringExtensionLess
