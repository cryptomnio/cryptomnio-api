curl --request PUT \
  --url http://ec2-3-222-208-106.compute-1.amazonaws.com:8086/exchange-keys/%7BkeyId%7D/activate \
  --header 'content-type: application/json' \
  --data '{"allocation":"TIER4"}'