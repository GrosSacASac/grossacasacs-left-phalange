import cjs from '@rollup/plugin-commonjs'
import nodePolyfills from 'rollup-plugin-node-polyfills';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import {dependencies} from './package.json'

const plugins = [cjs()]

const external = ['path', 'fs', ...Object.keys(dependencies)]

export default [
  {
    input: 'src/index.js',
    output: [
      {
        file: 'dist/index.cjs',
        format: 'cjs',
      },
    ],
    external,
    plugins,
  },
  {
    input: 'src/browser.js',
    output: [
        {
            file: 'dist/browser.es.js',
            format: 'esm',
          },
    ],
    plugins: [nodeResolve({browser: true}), ...plugins,nodePolyfills()],
  },
  {
    input: 'src/deno.js',
    output: [
        {
            file: 'dist/deno.es.js',
            format: 'esm',
          },
    ],
    plugins: [nodeResolve({browser: true}), ...plugins,nodePolyfills()],
  },
  {
    input: 'ui/source/js/main.js',
    output: [
        {
            file: 'ui/source/js/main.compiled.js',
            format: 'esm',
          },
    ],
    plugins: [],
  },
]

