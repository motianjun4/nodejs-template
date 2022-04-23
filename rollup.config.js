import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'

export default {
  input: "src/index.js",
  output: {
    file: "dist/index.cjs.js",
    format: "cjs",
    name: "template",
  },
  plugins: [
    babel({
      exclude: "node_modules/**",
      presets: ["@babel/preset-env", "@babel/preset-flow"],
    }),
    resolve(),
    commonjs(),
  ],
};