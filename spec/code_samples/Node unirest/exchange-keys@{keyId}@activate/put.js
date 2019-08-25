var unirest = require("unirest");

var req = unirest("PUT", "http://ec2-3-222-208-106.compute-1.amazonaws.com:8086/exchange-keys/%7BkeyId%7D/activate");

req.headers({
  "content-type": "application/json"
});

req.type("json");
req.send({
  "allocation": "TIER4"
});

req.end(function (res) {
  if (res.error) throw new Error(res.error);

  console.log(res.body);
});
