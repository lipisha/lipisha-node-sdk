'use strict';
var assert = require('assert');
var base = require('./base_test.js');

var config = base.config;


describe('Customers', function() {
    this.timeout(0);
    describe('#get_customers(customer_name, customer_mobile_number, customer_email, customer_first_payment_from, customer_first_payment_to, customer_last_payment_from, customer_last_payment_to, customer_payments_minimum, customer_payments_maximum, customer_total_spent_minimum, customer_total_spent_maximum, customer_average_spent_minimum, customer_average_spent_maximum, limit, offset, callback)', function() {
        it('should get customers without error', function(done) {
            base.client.get_customers(null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, function(err, response) {
                if (err) throw err;
                assert.equal(response.status.status, config.SUCCESS);
                assert.notEqual(response.content[0], undefined);
                assert.notEqual(response.content.length, 0);
                done();
            });
        });
    });

});
