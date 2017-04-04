export interface IRegister {
    (server: any, options: any, next: any): void;
    attributes?: any;
}
export declare function register(server: any, option: any, next: any): void;
