import requests

url = "http://ec2-3-222-208-106.compute-1.amazonaws.com:8086/wallets/%7BwalletId%7D"

response = requests.request("GET", url)

print(response.text)