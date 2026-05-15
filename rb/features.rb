# Ctp SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module CtpFeatures
  def self.make_feature(name)
    case name
    when "base"
      CtpBaseFeature.new
    when "test"
      CtpTestFeature.new
    else
      CtpBaseFeature.new
    end
  end
end
