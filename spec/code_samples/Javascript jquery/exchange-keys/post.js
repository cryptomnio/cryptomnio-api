var settings = {
  "async": true,
  "crossDomain": true,
  "url": "http://ec2-3-222-208-106.compute-1.amazonaws.com:8086/exchange-keys",
  "method": "POST",
  "headers": {
    "content-type": "application/json"
  },
  "processData": false,
  "data": "{\"exchange\":\"kraken\",\"key\":\"1aa5695d-4b8d-4aeb-8312-8a97d2119764\",\"secret\":\"1aa5695d-4b8d-4aeb-8312-8a97d2119764\",\"passphrase\":\"SECRET PHRASE\",\"activated\":true,\"allocation\":\"TIER4\"}"
}

$.ajax(settings).done(function (response) {
  console.log(response);
});