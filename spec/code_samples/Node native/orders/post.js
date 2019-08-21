var http = require("http");

var options = {
  "method": "POST",
  "hostname": "ec2-3-222-208-106.compute-1.amazonaws.com",
  "port": "8086",
  "path": "/orders",
  "headers": {
    "content-type": "application/json"
  }
};

var req = http.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.write(JSON.stringify({
  exchange: 'kraken',
  keyId: 'string',
  price: 0,
  volume: 0,
  side: 'buy',
  pair: 'btc_usd'
}));
req.end();