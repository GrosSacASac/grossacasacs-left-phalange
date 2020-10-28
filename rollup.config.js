import cjs from '@rollup/plugin-commonjs'
import {dependencies} from './package.json'

const plugins = [cjs()]

const external = ['path', 'fs', ...Object.keys(dependencies)]

export default [
  {
    input: 'src/index.js',
    output: [
      {
        file: 'dist/index.js',
        format: 'cjs',
      },
    ],
    external,
    plugins,
  },
]
