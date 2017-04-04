"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var plugin = function (server, option, next) {
    console.log('Register');
    next();
};
Object.defineProperty(plugin, 'attributes', {
    value: {
        pkg: require('../package.json')
    }
});
module.exports.register = plugin;
//# sourceMappingURL=index.js.map