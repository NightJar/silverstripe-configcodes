const Path = require('path');
// eslint-disable-next-line import/no-extraneous-dependencies
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
  ADMIN: Path.resolve('../../silverstripe/admin/client/src'),
};

const jsResolveConfig = resolveJS(ENV, PATHS);
jsResolveConfig.alias = {
  ...jsResolveConfig.alias,
  admin: PATHS.ADMIN,
};

const jsExternals = {
  ...externalJS(ENV, PATHS),
  'admin/i18n': 'i18n',
  'admin/lib/Injector': 'Injector',
  // Used directly (without Injector) to build ContentField:
  'admin/components/TextField/TextField': 'TextField',
  'admin/components/FieldHolder/FieldHolder': 'FieldHolder',
  // If we are using Injector.inject then we probably don't need these:
  'admin/components/Tip/Tip': 'Tip',
  'admin/components/Button/Button': 'Button',
  'admin/components/SingleSelectField/SingleSelectField': 'SingleSelectField',
};

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
    resolve: jsResolveConfig,
    externals: jsExternals,
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
      // define manually because @silverstripe/webpack-config.pluginCSS puts all css output files in a `styles` sub-dir.
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
