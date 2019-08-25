var data = JSON.stringify({
  "exchange": "kraken",
  "key": "1aa5695d-4b8d-4aeb-8312-8a97d2119764",
  "secret": "1aa5695d-4b8d-4aeb-8312-8a97d2119764",
  "passphrase": "SECRET PHRASE",
  "activated": true,
  "allocation": "TIER4"
});

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "http://ec2-3-222-208-106.compute-1.amazonaws.com:8086/exchange-keys");
xhr.setRequestHeader("content-type", "application/json");

xhr.send(data);