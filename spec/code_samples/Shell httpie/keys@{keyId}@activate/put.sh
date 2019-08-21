echo '{"allocation":"TIER4"}' |  \
  http PUT http://ec2-3-222-208-106.compute-1.amazonaws.com:8086/keys/%7BkeyId%7D/activate \
  content-type:application/json