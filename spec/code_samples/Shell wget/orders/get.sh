wget --quiet \
  --method GET \
  --output-document \
  - 'http://ec2-3-222-208-106.compute-1.amazonaws.com:8086/orders?exchange=SOME_STRING_VALUE&keyId=SOME_STRING_VALUE&internalOrderId=SOME_NUMBER_VALUE&closedOrders=SOME_BOOLEAN_VALUE&activeOrders=SOME_BOOLEAN_VALUE'