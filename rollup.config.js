const { default: nodeResolve } = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const { defineConfig } = require('rollup');
const { babel } = require('@rollup/plugin-babel');
const scss = require('rollup-plugin-scss');

module.exports = defineConfig({
  input: ['client/src/boot/index.js', 'client/src/styles/editableShortcodes.scss'],
  output: {
    dir: 'client/dist/',
    format: 'cjs',
    globals: {
      'jquery': 'jQuery',
      'react': 'React',
      'react-dom': 'ReactDOM',
      'react-dom/client': 'ReactDOM',
      'reactstrap': 'Reactstrap',
      'lib/Injector': 'Injector',
    }
  },
  plugins: [
    nodeResolve({ modulePaths: ['client/src'], extensions: ['.js', '.jsx', '.mjs', '.json'] }),
    babel({ babelHelpers: 'bundled', presets: ['@babel/preset-react'] }),
    commonjs(),
    scss({
      output: 'client/dist/css/editableShortcodes.css',
      loadPaths: ['../../silverstripe/admin/client/src/styles'],
      includePaths: ['../../silverstripe/admin/client/src/styles'],
    }),
  ],
  external: [
    'jquery',
    'react',
    'react-dom',
    'react-dom/client',
    'reactstrap',
    'lib/Injector',
  ],
});
