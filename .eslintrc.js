const eslintConfig = require('@silverstripe/eslint-config/.eslintrc');
const lineLength = eslintConfig.rules['max-len'] || ['error', {}];
lineLength[1].code = 120;
eslintConfig.rules['max-len'] = lineLength;
const moduleDirs = eslintConfig.settings['import/resolver'].node.moduleDirectory;
eslintConfig.settings['import/resolver'].node.moduleDirectory = moduleDirs.concat([
  '../../admin/client/src',
  '../../admin/node_modules',
]);
eslintConfig.settings['import/resolver'].alias = [['admin', '../../silverstripe/admin/client/src']];
module.exports = eslintConfig;
