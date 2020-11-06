# changelog

## 3.2.0

 * Add loadAsync, load for Deno

## 3.1.0

 * Add loadAsync


## 3.0.0

 * Remove filename option from parse
 * Works in the browser, Deno
 * Rename dist/index.js dist/index.cjs

## 2.1.0

 * Expose supportedExtensions, an array of strings

## 2.0.0

 * Do not export default
 * publish under @grossacasacs/left-phalange
 * Can load a file without providing a file extension, it will try to open all supported file types
 * Cannot force load as esm if the file has a different file extension