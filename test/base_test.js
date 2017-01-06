/**
 * - use dotenv to load .env variables
 * - dotenv will read the .env file in the root folder
 * - It will parse the file and inject the variables to our environment
 * ***** sample file******
 * LIPISHA_API_KEY=thisistheawesomelipishaapikey
 * LIPISHA_API_SIGNATURE=thisistheawesomelipishaapikeysignatue=
 * @type {[type]}
 */
'use strict';
require('dotenv').load();
var Lipisha = require('../lib/lipisha.js');

var config = {
    apiKey: process.env.LIPISHA_API_KEY,
    apiSignature: process.env.LIPISHA_API_SIGNATURE,
    environment: 'LIVE',
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

    REQUEST_MONEY_ACCOUNT: '',
    REQUEST_MONEY_MOBILE: '',
    REQUEST_MONEY_METHOD: 'Paybill (M-Pesa)',
    REQUEST_MONEY_REFERENCE: '',
    REQUEST_MONEY_AMOUNT: 10,

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

    CARD_ACCOUNT: '',
    CARD_NUMBER: '',
    CARD_ADDRESS1: '',
    CARD_ADDRESS2: '',
    CARD_EXPIRY: '',
    CARD_NAMES: '',
    CARD_COUNTRY: '',
    CARD_STATE: '',
    CARD_ZIP: '',
    CARD_SECURITY_CODE: '',
    CARD_AMOUNT: 0,
    CARD_CURRENCY: '',

    CARD_TX_COMPLETE_INDEX: '',
    CARD_TX_COMPLETE_REF: '',
    CARD_TX_REVERSE_INDEX: '',
    CARD_TX_REVERSE_REF: '',
    CARD_TX_VOID_INDEX: '',
    CARD_TX_VOID_REF: '',

};


var lipisha = new Lipisha(config.apiKey, config.apiSignature, config.environment);

module.exports = {
    client: lipisha,
    config: config,
    require_var: function(v) {
        return !(!v);
    }
};
