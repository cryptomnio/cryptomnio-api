import http.client

conn = http.client.HTTPConnection("ec2-3-222-208-106.compute-1.amazonaws.com:8086")

payload = "{\"allocation\":\"TIER4\"}"

headers = { 'content-type': "application/json" }

conn.request("PUT", "/keys/%7BkeyId%7D/activate", payload, headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))