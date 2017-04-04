"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function register(server, options, next) {
    console.log('registred');
    next();
}
exports.register = register;
;
exports.register.attributes = { pkg: require('../package.json') };
//# sourceMappingURL=plugin.js.map