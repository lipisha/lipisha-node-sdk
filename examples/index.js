var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({ extended: true  }));

var LIPISHA_API_KEY = process.env.LIPISHA_API_KEY;
var LIPISHA_API_SIGNATURE = process.env.LIPISHA_API_SIGNATURE;
var LIPISHA_API_VERSION = "1.3.0";
var ACTION_INITIATE = "Initiate";
var ACTION_ACKNOWLEDGE = "Acknowledge";
var ACTION_RECEIPT = "Receipt";
var STATUS_SUCCESS = "Success";
var STATUS_SUCCESS_CODE = "001";

var authorizationFilter = function(req, res, next) {
    if(req.body.api_key != LIPISHA_API_KEY && req.body.api_signature != LIPISHA_API_SIGNATURE) {
        res.sendStatus(403).send('Invalid credentials');
    } else {
        next();
    }
}

app.use(authorizationFilter);


app.post('/lipisha-ipn', function(req, res) {
    var api_type = req.body.api_type;
    console.log("Request Data\n", req.body);
    if (api_type == ACTION_INITIATE) {
        // At this point we can store the transaction in a draft state pending acknowledgement.
        // After we respond, Lipisha will send an acknowledgement confirming that this transaction
        // is valid.
        var response = {
            "api_key": LIPISHA_API_KEY,
            "api_signature": LIPISHA_API_SIGNATURE,
            "api_version": LIPISHA_API_VERSION,
            "api_type": ACTION_RECEIPT,
            "transaction_reference": req.body.transaction_reference,
            "transaction_status_code": STATUS_SUCCESS_CODE,
            "transaction_status": STATUS_SUCCESS,
            "transaction_status_description": "Transaction received",
            "transaction_custom_sms": "Payment received. Thank you"
        }
        res.json(response);
    } else if (api_type==ACTION_ACKNOWLEDGE) {
        // Lipisha acknowledges the transaction
        // At this point we can update the stored transaction from the initiate call above
        // marking it as valid.
        var transaction_reference = req.body.transaction_reference;
        var transaction_status = req.body.transaction_status;
        var transaction_status_code = req.body.transaction_status_code;
        var transaction_status_description = req.body.transaction_status_description;
        console.log("Transaction acknowledged:", transaction_reference, "Status:", transaction_status);
        res.send('Ok');
    } else {
        res.sendStatus(400).send('Unknown Request Type');
    }

});


var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('IPN example app listening at http://%s:%s', host, port);

});
