var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("DELETE", "http://ec2-3-222-208-106.compute-1.amazonaws.com:8086/exchange-keys/{keyId}/activate");

xhr.send(data);