export interface JsonApi {
    url?: string;
    urn?: string;
}
export interface JsonApiLoadMatch {
    if?: string;
    urn: string;
}
export interface Plugin {
    id?: string;
}
export interface PluginLoadMatch {
    id: string;
}
export interface PluginApi {
}
export interface PluginApiLoadMatch {
    if?: string;
    installplugin: string;
    return?: string;
}
