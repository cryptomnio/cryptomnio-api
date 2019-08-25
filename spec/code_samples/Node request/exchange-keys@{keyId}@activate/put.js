var request = require("request");

var options = {
  method: 'PUT',
  url: 'http://ec2-3-222-208-106.compute-1.amazonaws.com:8086/exchange-keys/%7BkeyId%7D/activate',
  headers: {'content-type': 'application/json'},
  body: {allocation: 'TIER4'},
  json: true
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
