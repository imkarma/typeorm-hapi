export interface IRegister {
    register(server: any, options: any, next: any): void;
    attributes?: any;
}
export declare const plugin: {
    register: (server: any, option: any, next: any) => void;
};
