export interface IRegister {
    (server: any, options: any, next: any): void;
    attributes?: any;
}
export default class Plugin {
    constructor();
    register: IRegister;
}
