var http = require("http");

var options = {
  "method": "PUT",
  "hostname": "ec2-3-222-208-106.compute-1.amazonaws.com",
  "port": "8086",
  "path": "/keys/%7BkeyId%7D/activate",
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

req.write(JSON.stringify({allocation: 'TIER4'}));
req.end();