wget --quiet \
  --method POST \
  --header 'content-type: application/json' \
  --body-data '{"exchange":"kraken","keyId":"string","price":0,"volume":0,"side":"buy","pair":"btc_usd"}' \
  --output-document \
  - http://ec2-3-222-208-106.compute-1.amazonaws.com:8086/orders