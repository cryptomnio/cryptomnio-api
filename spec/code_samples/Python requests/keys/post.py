import requests

url = "http://ec2-3-222-208-106.compute-1.amazonaws.com:8086/keys"

payload = "{\"exchange\":\"kraken\",\"key\":\"string\",\"secret\":\"string\",\"passphrase\":\"string\",\"userID\":\"string\"}"
headers = {'content-type': 'application/json'}

response = requests.request("POST", url, data=payload, headers=headers)

print(response.text)