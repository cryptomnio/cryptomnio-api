# OpenapiClient::InlineObject2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exchange** | [**ExchangeCode**](ExchangeCode.md) |  | 
**key_id** | **String** | API key ID | 
**price** | **Float** | Order price | 
**volume** | **Float** | Order volume | 
**side** | **String** | Order side | 
**pair** | [**PairCode**](PairCode.md) |  | 

## Code Sample

```ruby
require 'OpenapiClient'

instance = OpenapiClient::InlineObject2.new(exchange: null,
                                 key_id: null,
                                 price: null,
                                 volume: null,
                                 side: null,
                                 pair: null)
```


