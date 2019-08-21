var unirest = require("unirest");

var req = unirest("POST", "http://ec2-3-222-208-106.compute-1.amazonaws.com:8086/keys");

req.headers({
  "content-type": "application/json"
});

req.type("json");
req.send({
  "exchange": "kraken",
  "key": "string",
  "secret": "string",
  "passphrase": "string",
  "userID": "string"
});

req.end(function (res) {
  if (res.error) throw new Error(res.error);

  console.log(res.body);
});
