=begin
#Cryptomnio API

#test

The version of the OpenAPI document: 0.0.1
Contact: helloworld@flanneldivision.com
Generated by: https://openapi-generator.tech
OpenAPI Generator version: 4.1.0

=end

require 'spec_helper'
require 'json'
require 'date'

# Unit tests for OpenapiClient::CurrencyCode
# Automatically generated by openapi-generator (https://openapi-generator.tech)
# Please update as you see appropriate
describe 'CurrencyCode' do
  before do
    # run before each test
    @instance = OpenapiClient::CurrencyCode.new
  end

  after do
    # run after each test
  end

  describe 'test an instance of CurrencyCode' do
    it 'should create an instance of CurrencyCode' do
      expect(@instance).to be_instance_of(OpenapiClient::CurrencyCode)
    end
  end
end
