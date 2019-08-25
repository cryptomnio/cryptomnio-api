import http.client

conn = http.client.HTTPConnection("ec2-3-222-208-106.compute-1.amazonaws.com:8086")

conn.request("GET", "/exchange-keys?exchange=SOME_STRING_VALUE&activated=SOME_BOOLEAN_VALUE")

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))