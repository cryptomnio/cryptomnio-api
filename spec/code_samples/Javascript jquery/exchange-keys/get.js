var settings = {
  "async": true,
  "crossDomain": true,
  "url": "http://ec2-3-222-208-106.compute-1.amazonaws.com:8086/exchange-keys?exchange=SOME_STRING_VALUE&activated=SOME_BOOLEAN_VALUE",
  "method": "GET",
  "headers": {}
}

$.ajax(settings).done(function (response) {
  console.log(response);
});