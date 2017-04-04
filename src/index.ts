export interface IRegister {
    (server:any, options:any, next:any): void;
    attributes?: any;
}

let plugin = (server, option, next) => {
    console.log('Register')
    next();
};

module.exports.register = plugin;
module.exports.register.attributes = {
    pkg: require('../package.json')
};
