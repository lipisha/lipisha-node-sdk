var assert = require('assert');
var base = require('./base_test.js');

config = base.config;


describe('Cards', function() {
    this.timeout(0);
    describe('#authorize_card_transaction(card_account, card_number, card_address_1, card_address_2, card_expiry, card_names, card_country, card_state, card_zip, card_security_code, card_amount, card_currency, callback)', function() {
        it('should authorize card transaction without error', function(done) {
            if (!config.CARD_ACCOUNT && !config.CARD_NUMBER && !config.CARD_AMOUNT) {
                it('skip test - missing parameters', function () {});
                done();
            }
            base.client.authorize_card_transaction(config.CARD_ACCOUNT,
                                                   config.CARD_NUMBER,
                                                   config.CARD_ADDRESS1,
                                                   config.CARD_ADDRESS2,
                                                   config.CARD_EXPIRY,
                                                   config.CARD_NAMES,
                                                   config.CARD_COUNTRY,
                                                   config.CARD_STATE,
                                                   config.CARD_ZIP,
                                                   config.CARD_SECURITY_CODE,
                                                   config.CARD_AMOUNT,
                                                   config.CARD_CURRENCY,
                                                   function(err, response) {
                if (err) throw err;
                assert.equal(response.status.status, config.SUCCESS);
                done();
            });
        });
    });


    describe('#complete_card_transaction(transaction_index, transaction_reference, callback)', function() {
        it('should complete card transaction without error', function(done) {
            if (!config.CARD_TX_COMPLETE_INDEX && !config.CARD_TX_COMPLETE_REF) {
                it('skip test - missing parameters', function () {});
                done();
            }
            base.client.complete_card_transaction(config.CARD_TX_COMPLETE_INDEX, config.CARD_TX_COMPLETE_REF, function(err, response) {
                if (err) throw err;
                assert.equal(response.status.status, config.SUCCESS);
                assert.equal(response.content.transaction_index, config.CARD_TX_COMPLETE_INDEX);
                assert.equal(response.content.transaction_reference, config.CARD_TX_COMPLETE_REF);
                done();
            });
        });
    });
    describe('#void_card_transaction(transaction_index, transaction_reference, callback)', function() {
        it('should void card transaction without error', function(done) {
            if (!config.CARD_TX_VOID_INDEX && !config.CARD_TX_VOID_REF) {
                it('skip test - missing parameters', function () {});
                done();
            }
            base.client.void_card_transaction(config.CARD_TX_VOID_INDEX, config.CARD_TX_VOID_REF, function(err, response) {
                if (err) throw err;
                assert.equal(response.status.status, config.SUCCESS);
                assert.equal(response.content.transaction_index, config.CARD_TX_VOID_INDEX);
                assert.equal(response.content.transaction_reference, config.CARD_TX_VOID_REF);
                done();
            });
        });
    });

    describe('#reverse_card_transaction(transaction_index, transaction_reference, callback)', function() {
        it('should reverse card transaction without error', function(done) {
            if (!config.CARD_TX_REVERSE_INDEX && !config.CARD_TX_REVERSE_REF) {
                it('skip test - missing parameters', function () {});
                done();
            }
            base.client.reverse_card_transaction(config.CARD_TX_REVERSE_INDEX, config.CARD_TX_REVERSE_REF, function(err, response) {
                if (err) throw err;
                assert.equal(response.status.status, config.SUCCESS);
                assert.equal(response.content.transaction_index, config.CARD_TX_REVERSE_INDEX);
                assert.equal(response.content.transaction_reference, config.CARD_TX_REVERSE_REF);
                done();
            });
        });
    });


});

