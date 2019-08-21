var data = JSON.stringify({
  "exchange": "kraken",
  "key": "string",
  "secret": "string",
  "passphrase": "string",
  "userID": "string"
});

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "http://ec2-3-222-208-106.compute-1.amazonaws.com:8086/keys");
xhr.setRequestHeader("content-type", "application/json");

xhr.send(data);