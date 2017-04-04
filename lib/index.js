"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var plugin = function (server, option, next) {
    console.log('Register');
    next();
};
module.exports.register = plugin;
module.exports.register.attributes = {
    pkg: require('../package.json')
};
//# sourceMappingURL=index.js.map