var lipisha = require('../lib/lipisha.js');

var config = {
    apiKey: process.env.LIPISHA_API_KEY,
    apiSignature: process.env.LIPISHA_API_SIGNATURE,
    environment:'LIVE',
    SUCCESS: 'SUCCESS',
    FAILURE: 'FAIL',
    FLOAT_ACCOUNT: '',
}

var lipisha = new lipisha.Lipisha(config.apiKey, config.apiSignature, config.environment);

module.exports = {
    client: lipisha,
    config: config,
    require_var: function(v) {
        return !(!v);
    }
}
