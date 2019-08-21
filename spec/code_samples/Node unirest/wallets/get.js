var unirest = require("unirest");

var req = unirest("GET", "http://ec2-3-222-208-106.compute-1.amazonaws.com:8086/wallets");

req.query({
  "exchange": "SOME_STRING_VALUE",
  "keyId": "SOME_STRING_VALUE"
});


req.end(function (res) {
  if (res.error) throw new Error(res.error);

  console.log(res.body);
});
