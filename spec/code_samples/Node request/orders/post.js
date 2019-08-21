var request = require("request");

var options = {
  method: 'POST',
  url: 'http://ec2-3-222-208-106.compute-1.amazonaws.com:8086/orders',
  headers: {'content-type': 'application/json'},
  body: {
    exchange: 'kraken',
    keyId: 'string',
    price: 0,
    volume: 0,
    side: 'buy',
    pair: 'btc_usd'
  },
  json: true
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
