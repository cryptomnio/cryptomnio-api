import http.client

conn = http.client.HTTPConnection("ec2-3-222-208-106.compute-1.amazonaws.com:8086")

payload = "{\"exchange\":\"kraken\",\"keyId\":\"string\",\"price\":0,\"volume\":0,\"side\":\"buy\",\"pair\":\"btc_usd\"}"

headers = { 'content-type': "application/json" }

conn.request("POST", "/orders", payload, headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))