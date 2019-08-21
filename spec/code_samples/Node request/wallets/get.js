var request = require("request");

var options = {
  method: 'GET',
  url: 'http://ec2-3-222-208-106.compute-1.amazonaws.com:8086/wallets',
  qs: {exchange: 'SOME_STRING_VALUE', keyId: 'SOME_STRING_VALUE'}
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
