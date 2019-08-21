var settings = {
  "async": true,
  "crossDomain": true,
  "url": "http://ec2-3-222-208-106.compute-1.amazonaws.com:8086/keys/%7BkeyId%7D/activate",
  "method": "PARAMETERS",
  "headers": {}
}

$.ajax(settings).done(function (response) {
  console.log(response);
});