-- Ctp SDK error

local CtpError = {}
CtpError.__index = CtpError


function CtpError.new(code, msg, ctx)
  local self = setmetatable({}, CtpError)
  self.is_sdk_error = true
  self.sdk = "Ctp"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function CtpError:error()
  return self.msg
end


function CtpError:__tostring()
  return self.msg
end


return CtpError
