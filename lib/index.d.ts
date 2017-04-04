export interface IRegister {
    (server: any, options: any, next: any): void;
    attributes?: any;
}
declare let plugin: (server: any, option: any, next: any) => void;
export default plugin;
