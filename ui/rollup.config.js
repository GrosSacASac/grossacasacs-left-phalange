/* eslint-disable */
import { terser } from "rollup-plugin-terser";


export default [
  {
    input: `ui/source/js/main.js`,
    output: [
        {
            file: `ui/source/js/main.min.js`,
            format: `esm`,
          },
    ],
    plugins: [terser()],
  },
];

