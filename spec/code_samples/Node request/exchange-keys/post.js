var request = require("request");

var options = {
  method: 'POST',
  url: 'http://ec2-3-222-208-106.compute-1.amazonaws.com:8086/exchange-keys',
  headers: {'content-type': 'application/json'},
  body: {
    exchange: 'kraken',
    key: '1aa5695d-4b8d-4aeb-8312-8a97d2119764',
    secret: '1aa5695d-4b8d-4aeb-8312-8a97d2119764',
    passphrase: 'SECRET PHRASE',
    activated: true,
    allocation: 'TIER4'
  },
  json: true
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
