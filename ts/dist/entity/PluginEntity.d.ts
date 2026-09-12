import { CtpEntityBase } from '../CtpEntityBase';
import type { CtpSDK } from '../CtpSDK';
import type { Control } from '../types';
import type { Plugin, PluginLoadMatch } from '../CtpTypes';
declare class PluginEntity extends CtpEntityBase<Plugin> {
    constructor(client: CtpSDK, entopts: any);
    make(this: PluginEntity): PluginEntity;
    load(this: any, reqmatch?: PluginLoadMatch, ctrl?: Control): Promise<PluginEntity>;
}
export { PluginEntity };
