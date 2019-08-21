# OpenapiClient::Wallet

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exchange** | [**ExchangeCode**](ExchangeCode.md) |  | 
**balances** | [**Array&lt;Balance&gt;**](Balance.md) |  | 
**timestamp** | **DateTime** | The timestamp when wallet was synchronized last time | 

## Code Sample

```ruby
require 'OpenapiClient'

instance = OpenapiClient::Wallet.new(exchange: null,
                                 balances: null,
                                 timestamp: null)
```


