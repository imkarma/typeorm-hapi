"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function register(server, option, next) {
    this.attributes = {
        pkg: require('../package.json')
    };
    console.log('Register');
    next();
}
exports.register = register;
;
//# sourceMappingURL=index.js.map