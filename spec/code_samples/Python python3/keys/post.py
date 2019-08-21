import http.client

conn = http.client.HTTPConnection("ec2-3-222-208-106.compute-1.amazonaws.com:8086")

payload = "{\"exchange\":\"kraken\",\"key\":\"string\",\"secret\":\"string\",\"passphrase\":\"string\",\"userID\":\"string\"}"

headers = { 'content-type': "application/json" }

conn.request("POST", "/keys", payload, headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))