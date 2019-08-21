=begin
#Cryptomnio API

#test

The version of the OpenAPI document: 0.0.1
Contact: helloworld@flanneldivision.com
Generated by: https://openapi-generator.tech
OpenAPI Generator version: 4.1.0

=end

require 'date'

module OpenapiClient
  class InlineObject2
    attr_accessor :exchange

    # API key ID
    attr_accessor :key_id

    # Order price
    attr_accessor :price

    # Order volume
    attr_accessor :volume

    # Order side
    attr_accessor :side

    attr_accessor :pair

    class EnumAttributeValidator
      attr_reader :datatype
      attr_reader :allowable_values

      def initialize(datatype, allowable_values)
        @allowable_values = allowable_values.map do |value|
          case datatype.to_s
          when /Integer/i
            value.to_i
          when /Float/i
            value.to_f
          else
            value
          end
        end
      end

      def valid?(value)
        !value || allowable_values.include?(value)
      end
    end

    # Attribute mapping from ruby-style variable name to JSON key.
    def self.attribute_map
      {
        :'exchange' => :'exchange',
        :'key_id' => :'keyId',
        :'price' => :'price',
        :'volume' => :'volume',
        :'side' => :'side',
        :'pair' => :'pair'
      }
    end

    # Attribute type mapping.
    def self.openapi_types
      {
        :'exchange' => :'ExchangeCode',
        :'key_id' => :'String',
        :'price' => :'Float',
        :'volume' => :'Float',
        :'side' => :'String',
        :'pair' => :'PairCode'
      }
    end

    # Initializes the object
    # @param [Hash] attributes Model attributes in the form of hash
    def initialize(attributes = {})
      if (!attributes.is_a?(Hash))
        fail ArgumentError, "The input argument (attributes) must be a hash in `OpenapiClient::InlineObject2` initialize method"
      end

      # check to see if the attribute exists and convert string to symbol for hash key
      attributes = attributes.each_with_object({}) { |(k, v), h|
        if (!self.class.attribute_map.key?(k.to_sym))
          fail ArgumentError, "`#{k}` is not a valid attribute in `OpenapiClient::InlineObject2`. Please check the name to make sure it's valid. List of attributes: " + self.class.attribute_map.keys.inspect
        end
        h[k.to_sym] = v
      }

      if attributes.key?(:'exchange')
        self.exchange = attributes[:'exchange']
      end

      if attributes.key?(:'key_id')
        self.key_id = attributes[:'key_id']
      end

      if attributes.key?(:'price')
        self.price = attributes[:'price']
      end

      if attributes.key?(:'volume')
        self.volume = attributes[:'volume']
      end

      if attributes.key?(:'side')
        self.side = attributes[:'side']
      end

      if attributes.key?(:'pair')
        self.pair = attributes[:'pair']
      end
    end

    # Show invalid properties with the reasons. Usually used together with valid?
    # @return Array for valid properties with the reasons
    def list_invalid_properties
      invalid_properties = Array.new
      if @exchange.nil?
        invalid_properties.push('invalid value for "exchange", exchange cannot be nil.')
      end

      if @key_id.nil?
        invalid_properties.push('invalid value for "key_id", key_id cannot be nil.')
      end

      if @price.nil?
        invalid_properties.push('invalid value for "price", price cannot be nil.')
      end

      if @volume.nil?
        invalid_properties.push('invalid value for "volume", volume cannot be nil.')
      end

      if @side.nil?
        invalid_properties.push('invalid value for "side", side cannot be nil.')
      end

      if @pair.nil?
        invalid_properties.push('invalid value for "pair", pair cannot be nil.')
      end

      invalid_properties
    end

    # Check to see if the all the properties in the model are valid
    # @return true if the model is valid
    def valid?
      return false if @exchange.nil?
      return false if @key_id.nil?
      return false if @price.nil?
      return false if @volume.nil?
      return false if @side.nil?
      side_validator = EnumAttributeValidator.new('String', ["buy", "sell"])
      return false unless side_validator.valid?(@side)
      return false if @pair.nil?
      true
    end

    # Custom attribute writer method checking allowed values (enum).
    # @param [Object] side Object to be assigned
    def side=(side)
      validator = EnumAttributeValidator.new('String', ["buy", "sell"])
      unless validator.valid?(side)
        fail ArgumentError, "invalid value for \"side\", must be one of #{validator.allowable_values}."
      end
      @side = side
    end

    # Checks equality by comparing each attribute.
    # @param [Object] Object to be compared
    def ==(o)
      return true if self.equal?(o)
      self.class == o.class &&
          exchange == o.exchange &&
          key_id == o.key_id &&
          price == o.price &&
          volume == o.volume &&
          side == o.side &&
          pair == o.pair
    end

    # @see the `==` method
    # @param [Object] Object to be compared
    def eql?(o)
      self == o
    end

    # Calculates hash code according to all attributes.
    # @return [Integer] Hash code
    def hash
      [exchange, key_id, price, volume, side, pair].hash
    end

    # Builds the object from hash
    # @param [Hash] attributes Model attributes in the form of hash
    # @return [Object] Returns the model itself
    def self.build_from_hash(attributes)
      new.build_from_hash(attributes)
    end

    # Builds the object from hash
    # @param [Hash] attributes Model attributes in the form of hash
    # @return [Object] Returns the model itself
    def build_from_hash(attributes)
      return nil unless attributes.is_a?(Hash)
      self.class.openapi_types.each_pair do |key, type|
        if type =~ /\AArray<(.*)>/i
          # check to ensure the input is an array given that the attribute
          # is documented as an array but the input is not
          if attributes[self.class.attribute_map[key]].is_a?(Array)
            self.send("#{key}=", attributes[self.class.attribute_map[key]].map { |v| _deserialize($1, v) })
          end
        elsif !attributes[self.class.attribute_map[key]].nil?
          self.send("#{key}=", _deserialize(type, attributes[self.class.attribute_map[key]]))
        end # or else data not found in attributes(hash), not an issue as the data can be optional
      end

      self
    end

    # Deserializes the data based on type
    # @param string type Data type
    # @param string value Value to be deserialized
    # @return [Object] Deserialized data
    def _deserialize(type, value)
      case type.to_sym
      when :DateTime
        DateTime.parse(value)
      when :Date
        Date.parse(value)
      when :String
        value.to_s
      when :Integer
        value.to_i
      when :Float
        value.to_f
      when :Boolean
        if value.to_s =~ /\A(true|t|yes|y|1)\z/i
          true
        else
          false
        end
      when :Object
        # generic object (usually a Hash), return directly
        value
      when /\AArray<(?<inner_type>.+)>\z/
        inner_type = Regexp.last_match[:inner_type]
        value.map { |v| _deserialize(inner_type, v) }
      when /\AHash<(?<k_type>.+?), (?<v_type>.+)>\z/
        k_type = Regexp.last_match[:k_type]
        v_type = Regexp.last_match[:v_type]
        {}.tap do |hash|
          value.each do |k, v|
            hash[_deserialize(k_type, k)] = _deserialize(v_type, v)
          end
        end
      else # model
        OpenapiClient.const_get(type).build_from_hash(value)
      end
    end

    # Returns the string representation of the object
    # @return [String] String presentation of the object
    def to_s
      to_hash.to_s
    end

    # to_body is an alias to to_hash (backward compatibility)
    # @return [Hash] Returns the object in the form of hash
    def to_body
      to_hash
    end

    # Returns the object in the form of hash
    # @return [Hash] Returns the object in the form of hash
    def to_hash
      hash = {}
      self.class.attribute_map.each_pair do |attr, param|
        value = self.send(attr)
        next if value.nil?
        hash[param] = _to_hash(value)
      end
      hash
    end

    # Outputs non-array value in the form of hash
    # For object, use to_hash. Otherwise, just return the value
    # @param [Object] value Any valid value
    # @return [Hash] Returns the value in the form of hash
    def _to_hash(value)
      if value.is_a?(Array)
        value.compact.map { |v| _to_hash(v) }
      elsif value.is_a?(Hash)
        {}.tap do |hash|
          value.each { |k, v| hash[k] = _to_hash(v) }
        end
      elsif value.respond_to? :to_hash
        value.to_hash
      else
        value
      end
    end
  end
end
