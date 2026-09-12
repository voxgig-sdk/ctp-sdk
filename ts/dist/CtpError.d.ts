import { Context } from './Context';
declare class CtpError extends Error {
    isCtpError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { CtpError };
