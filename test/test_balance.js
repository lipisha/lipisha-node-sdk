var assert = require('assert');
var base = require('./base_test.js');

config = base.config;


describe('Balance', function() {
    this.timeout(0);
    describe('#get_balance()', function() {
        it('should get balance without error', function(done) {
            base.client.get_balance(function(err, response) {
                if (err) throw err;
                assert.equal(response.status.status, config.SUCCESS);
                done();
            });
        });
    });

    describe('#get_float()', function() {
        it('should get float without error', function(done) {
            if (!config.FLOAT_ACCOUNT) {
                 it('skip test - missing parameters', function() {});
                 return done();
            };
            base.client.get_float(config.FLOAT_ACCOUNT, function(err, response) {
                if (err) throw err;
                assert.equal(response.status.status, config.SUCCESS);
                assert.equal(response.content.account_number, config.FLOAT_ACCOUNT);
                done();
            });
        });
    })
});

