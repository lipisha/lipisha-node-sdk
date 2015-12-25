# Lipisha Payments Node SDK

This package provides bindings for Lipisha Payments API (http://developers.lipisha.com)

## Documentation

See usage examples below.

## Features

- Send money
- Acknowledge transactions
- Send SMS
- Get Float
- Get Balance
- Charge card transactions
- Search transactions
- Search customers
- Add users
- Add payment accounts and withdrawal accounts

## Installation

    npm install lipisha

Or install it yourself as:

    git clone https://github.com/lipisha/lipisha-node-sdk.git

    $ npm install -g .

## Usage

```js

var lipisha = require('lipisha');

// In this case api key and signature are stored in environmental variables
var client = new lipisha.Lipisha(process.env.LIPISHA_API_KEY, process.env.LIPISHA_API_SIGNATURE, 'live')


client.get_balance(function(err, response) {
    if (error) {
        // handle error
    }
    console.log(response) 
});


/** Sample logged response from the above apii call.
*
* { status: 
*   { status_code: 0,     status: 'SUCCESS',
*     status_description: 'Balance Found' },
*  content: { balance: '175.4600', currency: 'KES' } }
*/

client.send_money('03572', '0726539235', 200, function(err, response) { 
    if (err) {
        // handle error
    }
    console.log(response)
});

```

## IPN Examples

IPN Integration examples for Express are in the examples directory

https://github.com/lipisha/lipisha-node-sdk/tree/master/examples

## Running Tests

Edit the test configuration in `test/base_test.js`

Run all tests

```shell
npm install

mocha

```

Run a particular test

```shell
mocha test --grep "Pattern for test"
```

e.g. Balance test

```shell
mocha test --grep Balance
```


## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request
