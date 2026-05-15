# Ctp SDK utility: make_context
require_relative '../core/context'
module CtpUtilities
  MakeContext = ->(ctxmap, basectx) {
    CtpContext.new(ctxmap, basectx)
  }
end
