/* eslint-env node */

'use strict';

const path = require('path');

module.exports = function(env) {
  return {
    enabled: env !== 'production',
    clientAllowedKeys: [
      'API_HOST'
    ],
    fastbootAllowedKeys: [],
    failOnMissingKey: false,
    path: path.join(path.dirname(__dirname), '.env')
  }
};
