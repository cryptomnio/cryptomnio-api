var request = require("request");

var options = {
  method: 'GET',
  url: 'http://ec2-3-222-208-106.compute-1.amazonaws.com:8086/orders',
  qs: {
    exchange: 'SOME_STRING_VALUE',
    keyId: 'SOME_STRING_VALUE',
    internalOrderId: 'SOME_NUMBER_VALUE',
    closedOrders: 'SOME_BOOLEAN_VALUE',
    activeOrders: 'SOME_BOOLEAN_VALUE'
  }
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
