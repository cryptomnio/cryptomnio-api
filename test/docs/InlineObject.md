# OpenapiClient::InlineObject

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exchange** | [**ExchangeCode**](ExchangeCode.md) |  | 
**key** | **String** | Exchange API public key | 
**secret** | **String** | Exchange API private key | 
**passphrase** | **String** | Passphrase (only required for Coinbase) | [optional] 
**user_id** | **String** | Used only for Bitstamp | [optional] 

## Code Sample

```ruby
require 'OpenapiClient'

instance = OpenapiClient::InlineObject.new(exchange: null,
                                 key: null,
                                 secret: null,
                                 passphrase: null,
                                 user_id: null)
```


