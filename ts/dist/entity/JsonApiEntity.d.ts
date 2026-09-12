import { CtpEntityBase } from '../CtpEntityBase';
import type { CtpSDK } from '../CtpSDK';
import type { Control } from '../types';
import type { JsonApi, JsonApiLoadMatch } from '../CtpTypes';
declare class JsonApiEntity extends CtpEntityBase<JsonApi> {
    constructor(client: CtpSDK, entopts: any);
    make(this: JsonApiEntity): JsonApiEntity;
    load(this: any, reqmatch?: JsonApiLoadMatch, ctrl?: Control): Promise<JsonApiEntity>;
}
export { JsonApiEntity };
