var settings = {
  "async": true,
  "crossDomain": true,
  "url": "http://ec2-3-222-208-106.compute-1.amazonaws.com:8086/orders",
  "method": "POST",
  "headers": {
    "content-type": "application/json"
  },
  "processData": false,
  "data": "{\"exchange\":\"kraken\",\"keyId\":\"string\",\"price\":0,\"volume\":0,\"side\":\"buy\",\"pair\":\"btc_usd\"}"
}

$.ajax(settings).done(function (response) {
  console.log(response);
});