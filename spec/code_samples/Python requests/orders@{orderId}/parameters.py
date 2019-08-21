import requests

url = "http://ec2-3-222-208-106.compute-1.amazonaws.com:8086/orders/%7BorderId%7D"

response = requests.request("PARAMETERS", url)

print(response.text)