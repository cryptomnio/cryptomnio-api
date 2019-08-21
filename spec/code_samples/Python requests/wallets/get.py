import requests

url = "http://ec2-3-222-208-106.compute-1.amazonaws.com:8086/wallets"

querystring = {"exchange":"SOME_STRING_VALUE","keyId":"SOME_STRING_VALUE"}

response = requests.request("GET", url, params=querystring)

print(response.text)