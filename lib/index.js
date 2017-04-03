"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Plugin {
    constructor() {
        this.register = (server, options, next) => {
            server.bind(this);
            console.log('Register');
            next();
        };
        this.register.attributes = {
            pkg: require('../package.json')
        };
    }
}
exports.default = Plugin;
//# sourceMappingURL=index.js.map