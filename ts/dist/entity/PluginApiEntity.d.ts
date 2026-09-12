import { CtpEntityBase } from '../CtpEntityBase';
import type { CtpSDK } from '../CtpSDK';
import type { Control } from '../types';
import type { PluginApi, PluginApiLoadMatch } from '../CtpTypes';
declare class PluginApiEntity extends CtpEntityBase<PluginApi> {
    constructor(client: CtpSDK, entopts: any);
    make(this: PluginApiEntity): PluginApiEntity;
    load(this: any, reqmatch?: PluginApiLoadMatch, ctrl?: Control): Promise<PluginApiEntity>;
}
export { PluginApiEntity };
