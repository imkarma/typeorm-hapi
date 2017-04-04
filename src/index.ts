export interface IRegister {
    (server:any, options:any, next:any): void;
    attributes?: any;
}

export function register(server, option, next){
    console.log('Register')
    next();
};
module.exports.register.attributes = {
    pkg: require('../package.json')
};
