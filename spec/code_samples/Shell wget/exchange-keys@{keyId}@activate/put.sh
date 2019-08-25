wget --quiet \
  --method PUT \
  --header 'content-type: application/json' \
  --body-data '{"allocation":"TIER4"}' \
  --output-document \
  - http://ec2-3-222-208-106.compute-1.amazonaws.com:8086/exchange-keys/%7BkeyId%7D/activate