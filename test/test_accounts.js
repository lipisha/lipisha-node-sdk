var assert = require('assert');
var base = require('./base_test.js');

config = base.config;


describe('Accounts', function() {
    this.timeout(0);
    describe('#create_payment_account(account_type, account_name, account_admin, callback)', function() {
        it('should create payment account without error', function(done) {
            if (!config.PAYMENT_ACCOUNT_NAME && !config.PAYMENT_ACCOUNT_ADMIN) {
                it('skip test - missing parameters', function () {});
                return done();
            }
            base.client.create_payment_account(config.PAYMENT_ACCOUNT_TYPE_MOBILE, config.PAYMENT_ACCOUNT_NAME, config.PAYMENT_ACCOUNT_ADMIN, function(err, response) {
                if (err) throw err;
                assert.equal(response.status.status, config.SUCCESS);
                done();
            });
        });
    });

    describe('#create_withdrawal_account(account_type, name, number, bank_name, bank_branch, bank_address, swift_code, account_manager, callback)', function() {
        it('should create withdrawal account without error', function(done) {
            if (!config.WITHDRAWAL_ACCOUNT_NAME && !config.WITHDRAWAL_ACCOUNT_MANAGER) {
                 it('skip test - missing parameters', function() {});
                 return done();
            };
            base.client.create_withdrawal_account(config.WITHDRAWAL_ACCOUNT_TYPE,
                                                  config.WITHDRAWAL_ACCOUNT_NAME,
                                                  config.WITHDRAWAL_ACCOUNT_NUMBER,
                                                  config.WITHDRAWAL_ACCOUNT_BANK_NAME,
                                                  config.WITHDRAWAL_ACCOUNT_BANK_BRANCH,
                                                  config.WITHDRAWAL_ACCOUNT_BANK_ADDRESS,
                                                  config.WITHDRAWAL_ACCOUNT_SWIFT_CODE,
                                                  config.WITHDRAWAL_ACCOUNT_MANAGER,
                                                  function(err, response) {
                if (err) throw err;
                assert.equal(response.status.status, config.SUCCESS);
                assert.equal(response.content.transaction_account_number, config.WITHDRAWAL_ACCOUNT_NUMBER);
                done();
            });
        });
    });

    describe('#create_user(names, role, mobile_number, email, login, password, callback)', function() {
        it('should create user without error', function (done) {
            if (!config.USER_NAMES && !config.USER_ROLE) {
                 it('skip test - missing parameter', function(){});
                 return done();
            }
             base.client.create_user(config.USER_NAMES,
                                    config.USER_ROLE,
                                    config.USER_MOBILE,
                                    config.USER_EMAIL,
                                    config.USER_LOGIN,
                                    config.USER_PASSWORD,
                                    function(err, response) {
                                         if(err) throw err;
                                         assert.equal(response.status.status, config.SUCCESS);
                                         done();
                                    });
        });
    });
});

