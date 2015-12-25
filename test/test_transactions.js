var assert = require('assert');
var base = require('./base_test.js');

config = base.config;


describe('Transactions', function() {
    this.timeout(0);
    describe('#confirm_transaction(transaction_id, callback)', function() {
        it('should confirm transaction without error', function(done) {
            if (!config.TRANSACTION_ID_CONFIRM) {
                it('skip test - missing parameters', function () {});
                return done();
            }
            base.client.confirm_transaction(config.TRANSACTION_ID_CONFIRM, function(err, response) {
                if (err) throw err;
                assert.equal(response.status.status, config.SUCCESS);
                assert.equal(response.content.transaction_status, config.STATUS_CONFIRMED);
                done();
            });
        });
    });


    describe('#reverse_transaction(transaction_id, callback)', function() {
        it('should reverse transaction without error', function(done) {
            if (!config.TRANSACTION_ID_REVERSE) {
                it('skip test - missing parameters', function () {});
                return done();
            }
            base.client.reverse_transaction(config.TRANSACTION_ID_REVERSE, function(err, response) {
                if (err) throw err;
                assert.equal(response.status.status, config.SUCCESS);
                done();
            });
        });
    });

    describe('#get_transactions(transaction, transaction_type, transaction_method, transaction_date_start, transaction_date_end, transaction_account_name, transaction_account_number, transaction_reference, transaction_amount_minimum, transaction_amount_maximum, transaction_status, transaction_name, transaction_mobile_number, transaction_email, limit, offset, callback)', function() {
        it('should get transactions without error', function(done) {
            base.client.get_transactions(null, null, null, null, null, null, null, null, 50, 100, null, null, null, null, null, null, function(err, response) {
                if (err) throw err;
                assert.equal(response.status.status, config.SUCCESS);
                assert.notEqual(response.content[0], undefined);
                assert.notEqual(response.content.length, 0);
                done();
            });
        });
    });

});

