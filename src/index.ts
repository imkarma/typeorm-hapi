export interface IRegister {
    (server:any, options:any, next:any): void;
    attributes?: any;
}

export function register(server, option, next){
    this.attributes = {
        pkg: require('../package.json')
    };

    console.log('Register')
    next();
};
