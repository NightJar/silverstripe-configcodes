const Path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const {
  resolveJS,
  externalJS,
  moduleJS,
  pluginJS,
  moduleCSS,
} = require('@silverstripe/webpack-config');

const ENV = process.env.NODE_ENV;
const PATHS = {
  MODULES: 'node_modules',
  FILES_PATH: './', // public path to files, e.g. images, fonts, etc. that must be loaded by browser via CSS
  ROOT: Path.resolve(),
  SRC: Path.resolve('client/src'),
  DIST: Path.resolve('client/dist'),
};

const externals = externalJS(ENV, PATHS);
delete externals.reactstrap;

const config = [
  {
    name: 'js',
    entry: {
      bundle: `${PATHS.SRC}/boot/index.js`,
    },
    output: {
      path: PATHS.DIST,
      filename: '[name].js',
    },
    devtool: (ENV !== 'production') ? 'source-map' : '',
    resolve: resolveJS(ENV, PATHS),
    externals,
    module: moduleJS(ENV, PATHS),
    plugins: pluginJS(ENV, PATHS),
  },
  {
    name: 'css',
    entry: {
      bundle: `${PATHS.SRC}/styles/editableShortcodes.scss`,
    },
    output: {
      path: PATHS.DIST,
      filename: '[name].css',
    },
    devtool: (ENV !== 'production') ? 'source-map' : '',
    module: moduleCSS(ENV, PATHS),
    plugins: [
      new ExtractTextPlugin({
        filename: '[name].css',
        allChunks: true,
      }),
    ],
  },
];

// Use WEBPACK_CHILD=js or WEBPACK_CHILD=css env var to run a single config
module.exports = (process.env.WEBPACK_CHILD)
  ? config.find((entry) => entry.name === process.env.WEBPACK_CHILD)
  : module.exports = config;
