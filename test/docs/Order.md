# OpenapiClient::Order

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**internal_order_id** | **Float** | Cryptomnio order ID | 
**exchange_order_id** | **String** | Exchange order ID | 
**exchange** | [**ExchangeCode**](ExchangeCode.md) |  | 
**pair** | [**PairCode**](PairCode.md) |  | 
**side** | **String** | Order side (\&quot;sell\&quot; or \&quot;buy\&quot;) | [default to &#39;buy&#39;]
**type** | **String** | Order Type only limit is supported | [default to &#39;limit&#39;]
**status** | **String** | Order status | [default to &#39;queued&#39;]
**volume** | **Float** | Order volume | [default to 0]
**filled** | **Float** | Order executed (filled) amount | [default to 0]
**price** | **Float** | Order price | [default to 0]
**fee** | **Float** | Order fee | [default to 0]
**created_at** | **DateTime** | Order creation timestamp | 
**last_update_at** | **DateTime** | The timestamp when order was synchronized last time | 
**closed_at** | **DateTime** | Order close timestamp | 

## Code Sample

```ruby
require 'OpenapiClient'

instance = OpenapiClient::Order.new(internal_order_id: null,
                                 exchange_order_id: null,
                                 exchange: null,
                                 pair: null,
                                 side: null,
                                 type: null,
                                 status: null,
                                 volume: null,
                                 filled: null,
                                 price: null,
                                 fee: null,
                                 created_at: null,
                                 last_update_at: null,
                                 closed_at: null)
```


