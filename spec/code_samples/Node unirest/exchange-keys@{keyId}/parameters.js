var unirest = require("unirest");

var req = unirest("PARAMETERS", "http://ec2-3-222-208-106.compute-1.amazonaws.com:8086/exchange-keys/%7BkeyId%7D");


req.end(function (res) {
  if (res.error) throw new Error(res.error);

  console.log(res.body);
});
