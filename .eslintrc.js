const eslistConfig = require('@silverstripe/eslint-config/.eslintrc');
const lineLength = eslistConfig.rules['max-len'] || ['error', {}];
lineLength[1].code = 120;
eslistConfig.rules['max-len'] = lineLength;
module.exports = eslistConfig;
