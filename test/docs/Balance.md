# OpenapiClient::Balance

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency** | [**CurrencyCode**](CurrencyCode.md) |  | 
**amount** | **Float** |  | [default to 0]
**available** | **Float** | Available funds for given currency in wallet | [default to 0]
**frozen** | **Float** | Frozen funds | [default to 0]

## Code Sample

```ruby
require 'OpenapiClient'

instance = OpenapiClient::Balance.new(currency: null,
                                 amount: null,
                                 available: null,
                                 frozen: null)
```


