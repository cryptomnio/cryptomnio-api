var http = require("http");

var options = {
  "method": "DELETE",
  "hostname": "ec2-3-222-208-106.compute-1.amazonaws.com",
  "port": "8086",
  "path": "/exchange-keys/%7BkeyId%7D/activate",
  "headers": {}
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

req.end();