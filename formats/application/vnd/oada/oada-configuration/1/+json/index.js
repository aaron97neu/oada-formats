'use strict';

var ValidationError = require('../../../../../../../model').ValidationError;

module.exports = {
    additionalValidators: [
        function(d) {
            var cassert = d['client_assertion_signing_alg_values_supported'];

            if (cassert && cassert.indexOf && cassert.indexOf('RS256') === -1) {
                throw ValidationError.fromErrors({
                    keyword: 'require',
                    dataPath: '.client_assertion_signing_alg_values_supported',
                    message: 'should have "RS256" as an element'
                });
            } else {
                return true;
            }
        }
    ]
};
