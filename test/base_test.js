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

    PAYMENT_ACCOUNT_TYPE_MOBILE: 1,
    PAYMENT_ACCOUNT_NAME: '',
    PAYMENT_ACCOUNT_ADMIN: '',

    WITHDRAWAL_ACCOUNT_TYPE: 1,
    WITHDRAWAL_ACCOUNT_NAME: '',
    WITHDRAWAL_ACCOUNT_NUMBER: '',
    WITHDRAWAL_ACCOUNT_BANK_NAME: 'Bank of Lipisha',
    WITHDRAWAL_ACCOUNT_BANK_BRANCH: 'HQ',
    WITHDRAWAL_ACCOUNT_BANK_ADDRESS: 'HQ001, Lipa Street, 99999',
    WITHDRAWAL_ACCOUNT_SWIFT_CODE: 'LPSHKENXXX',
    WITHDRAWAL_ACCOUNT_MANAGER: '',

    USER_NAMES: '',
    USER_ROLE: '',
    USER_MOBILE: '',
    USER_EMAIL: '',
    USER_LOGIN: '',
    USER_PASSWORD: '',

    STATUS_CONFIRMED: 'Completed',
    TRANSACTION_ID_CONFIRM: '',
    TRANSACTION_ID_REVERSE: '',

}

var lipisha = new lipisha.Lipisha(config.apiKey, config.apiSignature, config.environment);

module.exports = {
    client: lipisha,
    config: config,
    require_var: function(v) {
        return !(!v);
    }
}
