var data = JSON.stringify({
  "allocation": "TIER4"
});

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("PUT", "http://ec2-3-222-208-106.compute-1.amazonaws.com:8086/keys/%7BkeyId%7D/activate");
xhr.setRequestHeader("content-type", "application/json");

xhr.send(data);