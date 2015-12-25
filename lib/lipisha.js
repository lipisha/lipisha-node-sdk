/**
 *
 * Lipisha SDK
 *
 **/

var http = require('http');
var https = require('https');
var url = require('url');
var querystring = require('querystring');


function Lipisha (apiKey, apiSignature, environment) {

    this._LIVE_API_BASE_URL = "https://www.lipisha.com/payments/accounts/index.php/v2/api/"
    this._SANDBOX_API_BASE_URL = "http://developer.lipisha.com/index.php/v2/api/"
    this._DEFAULT_API_VERSION = "1.3.0"
    this._DEFAULT_API_TYPE = "Callback"

    this._apiKey = apiKey;
    this._apiSignature = apiSignature;
    this._environment = environment.toUpperCase();
    if (this._environment == 'LIVE') {
        this._baseUrl = this._LIVE_API_BASE_URL;
    } else if (this._environment == 'TEST') {
        this._baseUrl = this._SANDBOX_API_BASE_URL;
    }
    this._urlParsed = url.parse(this._baseUrl);
    this._connHost = this._urlParsed.hostname;
    this._connBasePath = this._urlParsed.path;
    this._connPort = (this._urlParsed.protocol == 'https:') ? 443: 80;
    this._connector = (this._urlParsed.protocol == 'https:') ? https: http;

    this.execute = function(endpoint, parameters, callback) {
        parameters['api_key'] = this._apiKey;
        parameters['api_signature'] = this._apiSignature;
        parameters['api_version'] = this._DEFAULT_API_VERSION;
        parameters['api_type'] = this._DEFAULT_API_TYPE;
        var data = querystring.stringify(parameters);
        var options = {
            host: this._connHost,
            port: this._connPort,
            method: 'POST',
            path: this._connBasePath + endpoint,
            headers: {
                'Content-Length': data.length,
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        };
        var request = this._connector.request(options, function(response){
            var body = '';
            response.on('data', function(chunk){
                body += chunk;
            });
            response.on('end', function(){
                var cb_response;
                try {
                    cb_response = JSON.parse(body);
                } catch (err) {
                    return callback(err, {});
                }
                return callback(null, cb_response);
            });
         });

        request.on('error', function(err){
            return callback(err, {});
        });

        if (data != null) {
            request.write(data);
        }

        request.end();

    };

    /**
    * Get balance
    *
    * - callback (Function): function called with error as first argument and response object as second argument
    *
    * http://developer.lipisha.com/index.php/app/launch/api_get_balance
    **/
    this.get_balance = function(callback) {
        var parameters = {};
        this.execute("get_balance", parameters, function(err, response) {
            return callback(err, response);
        });
    };



    /**
    * Send money
    *
    * - account_number (String): Account number
    * - mobile_number (String): Mobile number
    * - amount (Number): Amount
    * - callback (Function): function called with error as first argument and response object as second argument
    *
    * http://developer.lipisha.com/index.php/app/launch/api_send_money
    **/
    this.send_money = function(account_number, mobile_number, amount, callback) {
        var parameters = {"account_number" : account_number, "mobile_number" : mobile_number, "amount" : amount};
        this.execute("send_money", parameters, function(err, response) {
            return callback(err, response);
        });
    };



    /**
    * Get float
    *
    * - account_number (String): Account number
    * - callback (Function): function called with error as first argument and response object as second argument
    *
    * http://developer.lipisha.com/index.php/app/launch/api_get_float
    **/
    this.get_float = function(account_number, callback) {
        var parameters = {"account_number" : account_number};
        this.execute("get_float", parameters, function(err, response) {
            return callback(err, response);
        });
    };



    /**
    * Send sms
    *
    * - mobile_number (String): Mobile number
    * - message (String): Message
    * - callback (Function): function called with error as first argument and response object as second argument
    *
    * http://developer.lipisha.com/index.php/app/launch/api_send_sms
    **/
    this.send_sms = function(mobile_number, message, callback) {
        var parameters = {"mobile_number" : mobile_number, "message" : message};
        this.execute("send_sms", parameters, function(err, response) {
            return callback(err, response);
        });
    };



    /**
    * Acknowledge transaction
    *
    * - transaction (String): Transaction
    * - callback (Function): function called with error as first argument and response object as second argument
    *
    * http://developer.lipisha.com/index.php/app/launch/api_acknowledge_transaction
    **/
    this.acknowledge_transaction = function(transaction, callback) {
        var parameters = {"transaction" : transaction};
        this.execute("acknowledge_transaction", parameters, function(err, response) {
            return callback(err, response);
        });
    };



    /**
    * Confirm transaction
    *
    * - transaction (String): Transaction
    * - callback (Function): function called with error as first argument and response object as second argument
    *
    * http://developer.lipisha.com/index.php/app/launch/api_confirm_transaction
    **/
    this.confirm_transaction = function(transaction, callback) {
        var parameters = {"transaction" : transaction};
        this.execute("confirm_transaction", parameters, function(err, response) {
            return callback(err, response);
        });
    };



    /**
    * Reverse transaction
    *
    * - transaction (String): Transaction
    * - callback (Function): function called with error as first argument and response object as second argument
    *
    * http://developer.lipisha.com/index.php/app/launch/api_reverse_transaction
    **/
    this.reverse_transaction = function(transaction, callback) {
        var parameters = {"transaction" : transaction};
        this.execute("reverse_transaction", parameters, function(err, response) {
            return callback(err, response);
        });
    };



    /**
    * Send airtime
    *
    * - account_number (String): Account number
    * - mobile_number (String): Mobile number
    * - amount (Number): Amount
    * - network (String): Network
    * - callback (Function): function called with error as first argument and response object as second argument
    *
    * http://developer.lipisha.com/index.php/app/launch/api_send_airtime
    **/
    this.send_airtime = function(account_number, mobile_number, amount, network, callback) {
        var parameters = {"account_number" : account_number, "mobile_number" : mobile_number, "amount" : amount, "network" : network};
        this.execute("send_airtime", parameters, function(err, response) {
            return callback(err, response);
        });
    };



    /**
    * Create user
    *
    * - full_name (String): Full name
    * - role (String): Role
    * - mobile_number (String): Mobile number
    * - email (String): Email
    * - user_name (String): User name
    * - password (String): Password
    * - callback (Function): function called with error as first argument and response object as second argument
    *
    * http://developer.lipisha.com/index.php/app/launch/api_create_user
    **/
    this.create_user = function(full_name, role, mobile_number, email, user_name, password, callback) {
        var parameters = {"full_name" : full_name, "role" : role, "mobile_number" : mobile_number, "email" : email, "user_name" : user_name, "password" : password};
        this.execute("create_user", parameters, function(err, response) {
            return callback(err, response);
        });
    };



    /**
    * Update user
    *
    * - full_name (String): Full name
    * - role (String): Role
    * - mobile_number (String): Mobile number
    * - email (String): Email
    * - user_name (String): User name
    * - callback (Function): function called with error as first argument and response object as second argument
    *
    * http://developer.lipisha.com/index.php/app/launch/api_update_user
    **/
    this.update_user = function(full_name, role, mobile_number, email, user_name, callback) {
        var parameters = {"full_name" : full_name, "role" : role, "mobile_number" : mobile_number, "email" : email, "user_name" : user_name};
        this.execute("update_user", parameters, function(err, response) {
            return callback(err, response);
        });
    };



    /**
    * Create payment account
    *
    * - transaction_account_type (Number): Transaction account type
    * - transaction_account_name (String): Transaction account name
    * - transaction_account_manager (String): Transaction account manager
    * - callback (Function): function called with error as first argument and response object as second argument
    *
    * http://developer.lipisha.com/index.php/app/launch/api_create_payment_account
    **/
    this.create_payment_account = function(transaction_account_type, transaction_account_name, transaction_account_manager, callback) {
        var parameters = {"transaction_account_type" : transaction_account_type, "transaction_account_name" : transaction_account_name, "transaction_account_manager" : transaction_account_manager};
        this.execute("create_payment_account", parameters, function(err, response) {
            return callback(err, response);
        });
    };



    /**
    * Create withdrawal account
    *
    * - transaction_account_type (Number): Transaction account type
    * - transaction_account_name (String): Transaction account name
    * - transaction_account_number (String): Transaction account number
    * - transaction_account_bank_name (String): Transaction account bank name
    * - transaction_account_bank_branch (String): Transaction account bank branch
    * - transaction_account_bank_address (String): Transaction account bank address
    * - transaction_account_swift_code (String): Transaction account swift code
    * - transaction_account_manager (String): Transaction account manager
    * - callback (Function): function called with error as first argument and response object as second argument
    *
    * http://developer.lipisha.com/index.php/app/launch/api_create_withdrawal_account
    **/
    this.create_withdrawal_account = function(transaction_account_type, transaction_account_name, transaction_account_number, transaction_account_bank_name, transaction_account_bank_branch, transaction_account_bank_address, transaction_account_swift_code, transaction_account_manager, callback) {
        var parameters = {"transaction_account_type" : transaction_account_type, "transaction_account_name" : transaction_account_name, "transaction_account_number" : transaction_account_number, "transaction_account_bank_name" : transaction_account_bank_name, "transaction_account_bank_branch" : transaction_account_bank_branch, "transaction_account_bank_address" : transaction_account_bank_address, "transaction_account_swift_code" : transaction_account_swift_code, "transaction_account_manager" : transaction_account_manager};
        this.execute("create_withdrawal_account", parameters, function(err, response) {
            return callback(err, response);
        });
    };



    /**
    * Get transactions
    *
    * - transaction (String): Transaction
    * - transaction_type (String): Transaction type
    * - transaction_method (String): Transaction method
    * - transaction_date_start (String): Transaction date start
    * - transaction_date_end (String): Transaction date end
    * - transaction_account_name (String): Transaction account name
    * - transaction_account_number (String): Transaction account number
    * - transaction_reference (String): Transaction reference
    * - transaction_amount_minimum (Number): Transaction amount minimum
    * - transaction_amount_maximum (Number): Transaction amount maximum
    * - transaction_status (String): Transaction status
    * - transaction_name (String): Transaction name
    * - transaction_mobile_number (String): Transaction mobile number
    * - transaction_email (String): Transaction email
    * - limit (Number): Limit
    * - offset (Number): Offset
    * - callback (Function): function called with error as first argument and response object as second argument
    *
    * http://developer.lipisha.com/index.php/app/launch/api_get_transactions
    **/
    this.get_transactions = function(transaction,
                                     transaction_type,
                                     transaction_method,
                                     transaction_date_start,
                                     transaction_date_end,
                                     transaction_account_name,
                                     transaction_account_number,
                                     transaction_reference,
                                     transaction_amount_minimum,
                                     transaction_amount_maximum,
                                     transaction_status,
                                     transaction_name,
                                     transaction_mobile_number,
                                     transaction_email,
                                     limit,
                                     offset,
                                     callback) {
        var limit = limit || 1000;
        var offset = offset || 0;
        var parameters = {"transaction" : transaction,
                          "transaction_type" : transaction_type,
                          "transaction_method" : transaction_method,
                          "transaction_date_start" : transaction_date_start,
                          "transaction_date_end" : transaction_date_end,
                          "transaction_account_name" : transaction_account_name,
                          "transaction_account_number" : transaction_account_number,
                          "transaction_reference" : transaction_reference,
                          "transaction_amount_minimum" : transaction_amount_minimum,
                          "transaction_amount_maximum" : transaction_amount_maximum,
                          "transaction_status" : transaction_status,
                          "transaction_name" : transaction_name,
                          "transaction_mobile_number" : transaction_mobile_number,
                          "transaction_email" : transaction_email,
                          "limit" : limit,
                          "offset" : offset};
        this.execute("get_transactions", parameters, function(err, response) {
            return callback(err, response);
        });
    };


    /**
    * Get customers
    *
    * - customer_name (String): Customer name
    * - customer_mobile_number (String): Customer mobile number
    * - customer_email (String): Customer email
    * - customer_first_payment_from (String): Customer first payment from
    * - customer_first_payment_to (String): Customer first payment to
    * - customer_last_payment_from (String): Customer last payment from
    * - customer_last_payment_to (String): Customer last payment to
    * - customer_payments_minimum (Number): Customer payments minimum
    * - customer_payments_maximum (Number): Customer payments maximum
    * - customer_total_spent_minimum (Number): Customer total spent minimum
    * - customer_total_spent_maximum (Number): Customer total spent maximum
    * - customer_average_spent_minimum (Number): Customer average spent minimum
    * - customer_average_spent_maximum (Number): Customer average spent maximum
    * - limit (Number): Limit
    * - offset (Number): Offset
    * - callback (Function): function called with error as first argument and response object as second argument
    *
    * http://developer.lipisha.com/index.php/app/launch/api_get_customers
    **/
    this.get_customers = function(customer_name,
                                  customer_mobile_number,
                                  customer_email,
                                  customer_first_payment_from,
                                  customer_first_payment_to,
                                  customer_last_payment_from,
                                  customer_last_payment_to,
                                  customer_payments_minimum,
                                  customer_payments_maximum,
                                  customer_total_spent_minimum,
                                  customer_total_spent_maximum,
                                  customer_average_spent_minimum,
                                  customer_average_spent_maximum,
                                  limit,
                                  offset,
                                  callback) {
        var limit = limit || 1000;
        var offset = offset || 0;
        var parameters = {"customer_name" : customer_name,
                          "customer_mobile_number" : customer_mobile_number,
                          "customer_email" : customer_email,
                          "customer_first_payment_from" : customer_first_payment_from,
                          "customer_first_payment_to" : customer_first_payment_to,
                          "customer_last_payment_from" : customer_last_payment_from,
                          "customer_last_payment_to" : customer_last_payment_to,
                          "customer_payments_minimum" : customer_payments_minimum,
                          "customer_payments_maximum" : customer_payments_maximum,
                          "customer_total_spent_minimum" : customer_total_spent_minimum,
                          "customer_total_spent_maximum" : customer_total_spent_maximum,
                          "customer_average_spent_minimum" : customer_average_spent_minimum,
                          "customer_average_spent_maximum" : customer_average_spent_maximum,
                          "limit" : limit,
                          "offset" : offset};
        
        this.execute("get_customers", parameters, function(err, response) {
            return callback(err, response);
        });
    };



    /**
    * Authorize card transaction
    *
    * - account_number (String): Account number
    * - card_number (String): Card number
    * - address1 (String): Address1
    * - address2 (String): Address2
    * - expiry (String): Expiry
    * - name (String): Name
    * - country (String): Country
    * - state (String): State
    * - zip (String): Zip
    * - security_code (String): Security code
    * - amount (String): Amount
    * - currency (String): Currency
    * - callback (Function): function called with error as first argument and response object as second argument
    *
    * http://developer.lipisha.com/index.php/app/launch/api_authorize_card_transaction
    **/
    this.authorize_card_transaction = function(account_number, card_number, address1, address2, expiry, name, country, state, zip, security_code, amount, currency, callback) {
        var parameters = {"account_number" : account_number, "card_number" : card_number, "address1" : address1, "address2" : address2, "expiry" : expiry, "name" : name, "country" : country, "state" : state, "zip" : zip, "security_code" : security_code, "amount" : amount, "currency" : currency};
        this.execute("authorize_card_transaction", parameters, function(err, response) {
            return callback(err, response);
        });
    };



    /**
    * Reverse card transaction
    *
    * - transaction_index (String): Transaction index
    * - transaction_reference (String): Transaction reference
    * - callback (Function): function called with error as first argument and response object as second argument
    *
    * http://developer.lipisha.com/index.php/app/launch/api_reverse_card_transaction
    **/
    this.reverse_card_transaction = function(transaction_index, transaction_reference, callback) {
        var parameters = {"transaction_index" : transaction_index, "transaction_reference" : transaction_reference};
        this.execute("reverse_card_transaction", parameters, function(err, response) {
            return callback(err, response);
        });
    };



    /**
    * Complete card transaction
    *
    * - transaction_index (String): Transaction index
    * - transaction_reference (String): Transaction reference
    * - callback (Function): function called with error as first argument and response object as second argument
    *
    * http://developer.lipisha.com/index.php/app/launch/api_complete_card_transaction
    **/
    this.complete_card_transaction = function(transaction_index, transaction_reference, callback) {
        var parameters = {"transaction_index" : transaction_index, "transaction_reference" : transaction_reference};
        this.execute("complete_card_transaction", parameters, function(err, response) {
            return callback(err, response);
        });
    };



    /**
    * Void card transaction
    *
    * - transaction_index (String): Transaction index
    * - transaction_reference (String): Transaction reference
    * - callback (Function): function called with error as first argument and response object as second argument
    *
    * http://developer.lipisha.com/index.php/app/launch/api_void_card_transaction
    **/
    this.void_card_transaction = function(transaction_index, transaction_reference, callback) {
        var parameters = {"transaction_index" : transaction_index, "transaction_reference" : transaction_reference};
        this.execute("void_card_transaction", parameters, function(err, response) {
            return callback(err, response);
        });
    };



    /**
    * Request settlement
    *
    * - account_number (String): Account number
    * - amount (String): Amount
    * - callback (Function): function called with error as first argument and response object as second argument
    *
    * http://developer.lipisha.com/index.php/app/launch/api_request_settlement
    **/
    this.request_settlement = function(account_number, amount, callback) {
        var parameters = {"account_number" : account_number, "amount" : amount};
        this.execute("request_settlement", parameters, function(err, response) {
            return callback(err, response);
        });
    };



    /**
    * Confirm transaction
    *
    * - transaction (String): Transaction
    * - callback (Function): function called with error as first argument and response object as second argument
    *
    * http://developer.lipisha.com/index.php/app/launch/api_confirm_transaction
    **/
    this.confirm_transaction = function(transaction, callback) {
        var parameters = {"transaction" : transaction};
        this.execute("confirm_transaction", parameters, function(err, response) {
            return callback(err, response);
        });
    };
};

var lipisha = module.exports = {
    Lipisha: Lipisha
};
