var settings = {
  "async": true,
  "crossDomain": true,
  "url": "http://ec2-3-222-208-106.compute-1.amazonaws.com:8086/keys",
  "method": "POST",
  "headers": {
    "content-type": "application/json"
  },
  "processData": false,
  "data": "{\"exchange\":\"kraken\",\"key\":\"string\",\"secret\":\"string\",\"passphrase\":\"string\",\"userID\":\"string\"}"
}

$.ajax(settings).done(function (response) {
  console.log(response);
});