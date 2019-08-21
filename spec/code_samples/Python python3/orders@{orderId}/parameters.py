import http.client

conn = http.client.HTTPConnection("ec2-3-222-208-106.compute-1.amazonaws.com:8086")

conn.request("PARAMETERS", "/orders/%7BorderId%7D")

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))