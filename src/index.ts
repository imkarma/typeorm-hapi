export interface IRegister {
    (server:any, options:any, next:any): void;
    attributes?: any;
}

let plugin = (server, option, next) => {
    console.log('Register')
    next();
};

Object.defineProperty(plugin, 'attributes',{
    value:{
        pkg: require('../package.json')
    }
});

module.exports.plugin = plugin;
