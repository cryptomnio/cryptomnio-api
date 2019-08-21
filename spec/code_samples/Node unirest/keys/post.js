var unirest = require("unirest");

var req = unirest("POST", "http://ec2-3-222-208-106.compute-1.amazonaws.com:8086/keys");

req.headers({
  "content-type": "application/json"
});

req.type("json");
req.send({
  "exchange": "kraken",
  "key": "1aa5695d-4b8d-4aeb-8312-8a97d2119764",
  "secret": "1aa5695d-4b8d-4aeb-8312-8a97d2119764",
  "passphrase": "SECRET PHRASE",
  "activated": true,
  "allocation": "TIER4"
});

req.end(function (res) {
  if (res.error) throw new Error(res.error);

  console.log(res.body);
});
