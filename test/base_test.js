var lipisha = require('../lib/lipisha.js');

var config = {
    apiKey: process.env.LIPISHA_API_KEY,
    apiSignature: process.env.LIPISHA_API_SIGNATURE,
    environment:'LIVE',
    SUCCESS: 'SUCCESS',
    FAILURE: 'FAIL',
    FLOAT_ACCOUNT: '',

    PAYOUT_ACCOUNT: '',
    PAYOUT_AMOUNT: 0,
    PAYOUT_MOBILE_NUMBER: '',

    AIRTIME_ACCOUNT: '',
    AIRTIME_AMOUNT: 0,
    AIRTIME_MOBILE_NUMBER: '',
    AIRTIME_NETWORK: '',

    SMS_MOBILE_NUMBER: '',
    SMS_MESSAGE: 'Message from LP/Node/SDK',
}

var lipisha = new lipisha.Lipisha(config.apiKey, config.apiSignature, config.environment);

module.exports = {
    client: lipisha,
    config: config,
    require_var: function(v) {
        return !(!v);
    }
}
