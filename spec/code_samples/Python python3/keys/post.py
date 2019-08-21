import http.client

conn = http.client.HTTPConnection("ec2-3-222-208-106.compute-1.amazonaws.com:8086")

payload = "{\"exchange\":\"kraken\",\"key\":\"1aa5695d-4b8d-4aeb-8312-8a97d2119764\",\"secret\":\"1aa5695d-4b8d-4aeb-8312-8a97d2119764\",\"passphrase\":\"SECRET PHRASE\",\"activated\":true,\"allocation\":\"TIER4\"}"

headers = { 'content-type': "application/json" }

conn.request("POST", "/keys", payload, headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))