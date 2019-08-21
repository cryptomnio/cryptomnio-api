wget --quiet \
  --method POST \
  --header 'content-type: application/json' \
  --body-data '{"exchange":"kraken","key":"string","secret":"string","passphrase":"string","userID":"string"}' \
  --output-document \
  - http://ec2-3-222-208-106.compute-1.amazonaws.com:8086/keys