import http.client

conn = http.client.HTTPConnection("ec2-3-222-208-106.compute-1.amazonaws.com:8086")

conn.request("GET", "/orders?exchange=SOME_STRING_VALUE&keyId=SOME_STRING_VALUE&internalOrderId=SOME_NUMBER_VALUE&closedOrders=SOME_BOOLEAN_VALUE&activeOrders=SOME_BOOLEAN_VALUE")

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))