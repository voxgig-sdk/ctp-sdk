
import { Context } from './Context'


class CtpError extends Error {

  isCtpError = true

  sdk = 'Ctp'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  CtpError
}

