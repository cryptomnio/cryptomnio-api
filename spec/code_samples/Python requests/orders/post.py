import requests

url = "http://ec2-3-222-208-106.compute-1.amazonaws.com:8086/orders"

payload = "{\"exchange\":\"kraken\",\"keyId\":\"string\",\"price\":0,\"volume\":0,\"side\":\"buy\",\"pair\":\"btc_usd\"}"
headers = {'content-type': 'application/json'}

response = requests.request("POST", url, data=payload, headers=headers)

print(response.text)