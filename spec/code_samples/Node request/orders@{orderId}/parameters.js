var request = require("request");

var options = {
  method: 'PARAMETERS',
  url: 'http://ec2-3-222-208-106.compute-1.amazonaws.com:8086/orders/%7BorderId%7D'
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
