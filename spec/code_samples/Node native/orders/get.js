var http = require("http");

var options = {
  "method": "GET",
  "hostname": "ec2-3-222-208-106.compute-1.amazonaws.com",
  "port": "8086",
  "path": "/orders?exchange=SOME_STRING_VALUE&keyId=SOME_STRING_VALUE&internalOrderId=SOME_NUMBER_VALUE&closedOrders=SOME_BOOLEAN_VALUE&activeOrders=SOME_BOOLEAN_VALUE",
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