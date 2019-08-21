# OpenapiClient::OrdersApi

All URIs are relative to *http://ec2-3-222-208-106.compute-1.amazonaws.com:8086*

Method | HTTP request | Description
------------- | ------------- | -------------
[**d_elete_orders_order_id**](OrdersApi.md#d_elete_orders_order_id) | **DELETE** /orders/{orderId} | Cancel order
[**g_et_orders**](OrdersApi.md#g_et_orders) | **GET** /orders | Get all orders
[**p_ost_orders**](OrdersApi.md#p_ost_orders) | **POST** /orders | Create new order



## d_elete_orders_order_id

> Order d_elete_orders_order_id(order_id)

Cancel order

Cancels order on exchange and updates order status in Cryptomnio storage. This operation is allowed only if API key has been activated. 

### Example

```ruby
# load the gem
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure HTTP basic authorization: BasicAuth
  config.username = 'YOUR USERNAME'
  config.password = 'YOUR PASSWORD'
end

api_instance = OpenapiClient::OrdersApi.new
order_id = 'order_id_example' # String | 

begin
  #Cancel order
  result = api_instance.d_elete_orders_order_id(order_id)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling OrdersApi->d_elete_orders_order_id: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order_id** | **String**|  | 

### Return type

[**Order**](Order.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## g_et_orders

> Array&lt;Order&gt; g_et_orders(opts)

Get all orders

Returns all orders

### Example

```ruby
# load the gem
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure HTTP basic authorization: BasicAuth
  config.username = 'YOUR USERNAME'
  config.password = 'YOUR PASSWORD'
end

api_instance = OpenapiClient::OrdersApi.new
opts = {
  exchange: OpenapiClient::ExchangeCode.new, # ExchangeCode | 
  key_id: 'key_id_example', # String | API key ID
  internal_order_id: 3.4, # Float | Cryptomnio order ID
  closed_orders: true, # Boolean | Get only closed orders
  active_orders: true # Boolean | Get only active orders
}

begin
  #Get all orders
  result = api_instance.g_et_orders(opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling OrdersApi->g_et_orders: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **exchange** | [**ExchangeCode**](.md)|  | [optional] 
 **key_id** | **String**| API key ID | [optional] 
 **internal_order_id** | **Float**| Cryptomnio order ID | [optional] 
 **closed_orders** | **Boolean**| Get only closed orders | [optional] 
 **active_orders** | **Boolean**| Get only active orders | [optional] 

### Return type

[**Array&lt;Order&gt;**](Order.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## p_ost_orders

> Order p_ost_orders(inline_object2)

Create new order

Stores order in Cryptomnio and pushes it immediately to the exchange. The new order is stored with `queued` status, which means that order is being processed by the Cryptomnio. This operation is allowed only if API key has been activated. 

### Example

```ruby
# load the gem
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure HTTP basic authorization: BasicAuth
  config.username = 'YOUR USERNAME'
  config.password = 'YOUR PASSWORD'
end

api_instance = OpenapiClient::OrdersApi.new
inline_object2 = OpenapiClient::InlineObject2.new # InlineObject2 | 

begin
  #Create new order
  result = api_instance.p_ost_orders(inline_object2)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling OrdersApi->p_ost_orders: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inline_object2** | [**InlineObject2**](InlineObject2.md)|  | 

### Return type

[**Order**](Order.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

