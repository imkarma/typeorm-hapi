"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function register(server, option, next) {
    console.log('Register');
    next();
}
exports.register = register;
;
module.exports.register.attributes = {
    pkg: require('../package.json')
};
//# sourceMappingURL=index.js.map