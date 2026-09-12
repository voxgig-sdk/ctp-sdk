import { JsonApiEntity } from './entity/JsonApiEntity';
import { PluginEntity } from './entity/PluginEntity';
import { PluginApiEntity } from './entity/PluginApiEntity';
export type * from './CtpTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { CtpEntityBase } from './CtpEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
declare class CtpSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    _rawRequest(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    JsonApi(entopts?: Record<string, any>): JsonApiEntity;
    Plugin(entopts?: Record<string, any>): PluginEntity;
    PluginApi(entopts?: Record<string, any>): PluginApiEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): CtpSDK;
    tester(testopts?: any, sdkopts?: any): CtpSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof CtpSDK;
export { stdutil, config, BaseFeature, CtpEntityBase, CtpSDK, SDK, };
