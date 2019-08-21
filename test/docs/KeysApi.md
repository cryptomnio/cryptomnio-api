# OpenapiClient::KeysApi

All URIs are relative to *http://ec2-3-222-208-106.compute-1.amazonaws.com:8086*

Method | HTTP request | Description
------------- | ------------- | -------------
[**d_elete_keys_key_id_activation**](KeysApi.md#d_elete_keys_key_id_activation) | **DELETE** /keys/{keyId}/activate | Deactivate API key
[**keys_key_id_delete**](KeysApi.md#keys_key_id_delete) | **DELETE** /keys/{keyId} | Deactivate and Delete API key
[**keys_post**](KeysApi.md#keys_post) | **POST** /keys | Upload and store exchange API key
[**p_ut_keys_key_id_activate**](KeysApi.md#p_ut_keys_key_id_activate) | **PUT** /keys/{keyId}/activate | Activate API key



## d_elete_keys_key_id_activation

> OkMessage d_elete_keys_key_id_activation(key_id)

Deactivate API key

Deactivates provided API key ID in Cryptomnio. This operation means that Cryptomnio will stop collecting data for the API key, but will keep current trading data in storage 

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

api_instance = OpenapiClient::KeysApi.new
key_id = 'key_id_example' # String | 

begin
  #Deactivate API key
  result = api_instance.d_elete_keys_key_id_activation(key_id)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling KeysApi->d_elete_keys_key_id_activation: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key_id** | **String**|  | 

### Return type

[**OkMessage**](OkMessage.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## keys_key_id_delete

> OkMessage keys_key_id_delete(key_id)

Deactivate and Delete API key

Deactivates and deletes API key from cryptomnio and clears all connected trade data (orders, balances, etc.) 

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

api_instance = OpenapiClient::KeysApi.new
key_id = 'key_id_example' # String | 

begin
  #Deactivate and Delete API key
  result = api_instance.keys_key_id_delete(key_id)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling KeysApi->keys_key_id_delete: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key_id** | **String**|  | 

### Return type

[**OkMessage**](OkMessage.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## keys_post

> OkMessage keys_post(inline_object)

Upload and store exchange API key

Uploads and stores exchange API key in the cryptomnio.

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

api_instance = OpenapiClient::KeysApi.new
inline_object = OpenapiClient::InlineObject.new # InlineObject | 

begin
  #Upload and store exchange API key
  result = api_instance.keys_post(inline_object)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling KeysApi->keys_post: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inline_object** | [**InlineObject**](InlineObject.md)|  | 

### Return type

[**OkMessage**](OkMessage.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## p_ut_keys_key_id_activate

> OkMessage p_ut_keys_key_id_activate(key_id, inline_object1)

Activate API key

Activates stored API key in Cryptomnio. This operation means that Cryptomnio will start trading data synchronization  based on passed allocation level.  **NOTE** `Content-Length` will need to be set to zero when calling this endpoint.  For more information, this follows the style of  [github's API](https://developer.github.com/v3/gists/#star-a-gist) 

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

api_instance = OpenapiClient::KeysApi.new
key_id = 'key_id_example' # String | 
inline_object1 = OpenapiClient::InlineObject1.new # InlineObject1 | 

begin
  #Activate API key
  result = api_instance.p_ut_keys_key_id_activate(key_id, inline_object1)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling KeysApi->p_ut_keys_key_id_activate: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key_id** | **String**|  | 
 **inline_object1** | [**InlineObject1**](InlineObject1.md)|  | 

### Return type

[**OkMessage**](OkMessage.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

