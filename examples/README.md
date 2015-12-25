# IPN Integration examples


This is an examples of Lipisha IPN integration using [express](http://expressjs.com/en/index.html).

This assumes that you have configured an IPN URL for API callbacks.

IPN: Instant Payment Notification

## Usage

The bulk of the logic happens in the [index module](https://github.com/lipisha/lipisha-node-sdk/tree/master/examples/index.js).

For production usage, handling IPN callbacks should be mapped to records in permanent storage.

This setup assumes that the api key and signature are exposed as environmental variables, namely:

- `LIPISHA_API_KEY`
- `LIPISHA_API_SIGNATURE`



```shell
export LIPISHA_API_KEY="<YOUR-API-KEY>"
export LIPISHA_API_SIGNATURE="<YOUR-API-SIGNATURE>"
```

Adjust the controller settings to load your `API_KEY` and `API_SIGNATURE`.


## Running

Make sure you have `nodejs` ([nodejs](http://nodejs.org/)) installed.

```shell
npm install
node index.js
```

Test HTTP requests may then be POSTED test parameters to

    http://localhost:3000/lipisha-ipn/
