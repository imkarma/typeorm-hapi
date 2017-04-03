export interface IRegister {
    (server:any, options:any, next:any): void;
    attributes?: any;
}

export default class Plugin {
    constructor() {
        this.register.attributes = {
            pkg: require('../package.json')
        };
    }

    register:IRegister = (server, options, next) => {
        server.bind(this);
        console.log('Register')
        next();
    };
}