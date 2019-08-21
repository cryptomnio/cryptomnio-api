import requests

url = "http://ec2-3-222-208-106.compute-1.amazonaws.com:8086/keys/%7BkeyId%7D/activate"

payload = "{\"allocation\":\"TIER4\"}"
headers = {'content-type': 'application/json'}

response = requests.request("PUT", url, data=payload, headers=headers)

print(response.text)