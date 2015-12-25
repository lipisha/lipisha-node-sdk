var assert = require('assert');
var base = require('./base_test.js');

config = base.config;


describe('Send', function() {
    this.timeout(0);
    describe('#send_money(account, mobile_number, amount, callback)', function() {
        it('should send money without error', function(done) {
            if (!config.PAYOUT_ACCOUNT && !config.PAYOUT_AMOUNT && !config.PAYOUT_MOBILE_NUMBER) {
                it('skip test - missing parameters', function() {});
                done();
            }
            base.client.send_money(config.PAYOUT_ACCOUNT, config.PAYOUT_MOBILE_NUMBER, config.PAYOUT_AMOUNT, function(err, response) {
                if (err) throw err;
                assert.equal(response.status.status, config.SUCCESS);
                done();
            });
        });
    });

    describe('#send_airtime(account, mobile_number, amount, network, callback)', function() {
        it('should send airtime without error', function(done) {
            if (!config.AIRTIME_ACCOUNT && !config.AIRTIME_MOBILE_NUMBER && !config.AIRTIME_AMOUNT && !config.AIRTIME_NETWORK) {
                 it('skip test - missing parameters', function() {});
                 done();
            };
            base.client.send_airtime(config.AIRTIME_ACCOUNT, config.AIRTIME_MOBILE_NUMBER, config.AIRTIME_AMOUNT, config.AIRTIME_AMOUNT, function(err, response) {
                if (err) throw err;
                assert.equal(response.status.status, config.SUCCESS);
                assert.equal(response.content.mobile_number, config.AIRTIME_MOBILE_NUMBER);
                assert.equal(response.content.amount, config.AIRTIME_AMOUNT);
                done();
            });
        });
    });

    describe('#send_sms(mobile_number, message, callback)', function() {
        it('should send sms without error', function(done) {
            if (!config.SMS_MOBILE_NUMBER) {
                 it('skip test - missing parameters', function() {});
                 done();
            };
            base.client.send_sms(config.SMS_MOBILE_NUMBER, config.SMS_MESSAGE, function(err, response) {
                 if (err) throw err;
                 assert.equal(response.status.status, config.SUCCESS);
                 done();
            });
        });
    });
});

