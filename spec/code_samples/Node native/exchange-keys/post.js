var http = require("http");

var options = {
  "method": "POST",
  "hostname": "ec2-3-222-208-106.compute-1.amazonaws.com",
  "port": "8086",
  "path": "/exchange-keys",
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
  key: '1aa5695d-4b8d-4aeb-8312-8a97d2119764',
  secret: '1aa5695d-4b8d-4aeb-8312-8a97d2119764',
  passphrase: 'SECRET PHRASE',
  activated: true,
  allocation: 'TIER4'
}));
req.end();