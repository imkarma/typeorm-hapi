export interface IRegister {
    register (server:any, options:any, next:any): void;
    attributes?: any;
}

export const plugin = {
    register: (server, option, next) => {
        // this.attributes = {
        //     pkg: require('../package.json')
        // };
        console.log('Register');
        next();
    }
}
