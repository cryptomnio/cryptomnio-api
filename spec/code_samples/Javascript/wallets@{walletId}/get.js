var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "http://ec2-3-222-208-106.compute-1.amazonaws.com:8086/wallets/{walletId}");

xhr.send(data);