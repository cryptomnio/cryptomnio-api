curl --request POST \
  --url http://ec2-3-222-208-106.compute-1.amazonaws.com:8086/orders \
  --header 'content-type: application/json' \
  --data '{"exchange":"kraken","keyId":"string","price":0,"volume":0,"side":"buy","pair":"btc_usd"}'