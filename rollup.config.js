/* eslint-disable */
import cjs from '@rollup/plugin-commonjs';
import nodePolyfills from 'rollup-plugin-node-polyfills';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import packageJson from './package.json' assert {type: "json"};;

const {dependencies} = packageJson;
const plugins = [cjs()];

const external = [`path`, `fs`, `fs/promises`, ...Object.keys(dependencies)];

export default [
  {
    input: `src/index.js`,
    output: [
      {
        file: `dist/index.cjs`,
        format: `cjs`,
      },
    ],
    external,
    plugins,
  },
  {
    input: `src/browser.js`,
    output: [
        {
            file: `dist/browser.es.js`,
            format: `esm`,
          },
    ],
    plugins: [nodeResolve({browser: true, preferBuiltins: false}), ...plugins, nodePolyfills()],
  },
  {
    input: `src/deno.js`,
    output: [
        {
            file: `dist/deno.es.js`,
            format: `esm`,
          },
    ],
    plugins: [nodeResolve({browser: true, preferBuiltins: false}), ...plugins, nodePolyfills()],
  },
];

