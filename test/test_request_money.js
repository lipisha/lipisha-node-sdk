var assert = require('assert');
var base = require('./base_test.js');

config = base.config;


describe('Request Money', function() {
    this.timeout(0);
    describe('#request_money(account_number, mobile_number, method, amount, reference, callback)', function() {
        it('should request money without error', function(done) {
            if (!config.REQUEST_MONEY_MOBILE && !config.REQUEST_MONEY_ACCOUNT_NUMBER && !config.REQUEST_MONEY_REFERENCE) {
                it('skip test - missing parameters', function() {});
                return done();
            }
            base.client.request_money(config.REQUEST_MONEY_ACCOUNT,
                                      config.REQUEST_MONEY_MOBILE,
                                      config.REQUEST_MONEY_METHOD,
                                      config.REQUEST_MONEY_AMOUNT,
                                      config.REQUEST_MONEY_REFERENCE,
                                      function(err, response) {
                if (err) throw err;
                assert.equal(response.status.status, config.SUCCESS);
                done();
            });
        });
    });
});

