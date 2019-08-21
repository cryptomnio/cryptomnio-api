var unirest = require("unirest");

var req = unirest("POST", "http://ec2-3-222-208-106.compute-1.amazonaws.com:8086/orders");

req.headers({
  "content-type": "application/json"
});

req.type("json");
req.send({
  "exchange": "kraken",
  "keyId": "string",
  "price": 0,
  "volume": 0,
  "side": "buy",
  "pair": "btc_usd"
});

req.end(function (res) {
  if (res.error) throw new Error(res.error);

  console.log(res.body);
});
