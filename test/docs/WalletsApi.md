# OpenapiClient::WalletsApi

All URIs are relative to *http://ec2-3-222-208-106.compute-1.amazonaws.com:8086*

Method | HTTP request | Description
------------- | ------------- | -------------
[**wallets_get**](WalletsApi.md#wallets_get) | **GET** /wallets | Get all wallets
[**wallets_wallet_id_get**](WalletsApi.md#wallets_wallet_id_get) | **GET** /wallets/{walletId} | Get wallet info



## wallets_get

> Object wallets_get(opts)

Get all wallets

Get all wallets based on exchange

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

api_instance = OpenapiClient::WalletsApi.new
opts = {
  exchange: OpenapiClient::ExchangeCode.new, # ExchangeCode | 
  key_id: 'key_id_example' # String | API key ID from cryptomnio
}

begin
  #Get all wallets
  result = api_instance.wallets_get(opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling WalletsApi->wallets_get: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **exchange** | [**ExchangeCode**](.md)|  | [optional] 
 **key_id** | **String**| API key ID from cryptomnio | [optional] 

### Return type

**Object**

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## wallets_wallet_id_get

> Object wallets_wallet_id_get(wallet_id)

Get wallet info

Get wallet info

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

api_instance = OpenapiClient::WalletsApi.new
wallet_id = 'wallet_id_example' # String | 

begin
  #Get wallet info
  result = api_instance.wallets_wallet_id_get(wallet_id)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling WalletsApi->wallets_wallet_id_get: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **wallet_id** | **String**|  | 

### Return type

**Object**

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

