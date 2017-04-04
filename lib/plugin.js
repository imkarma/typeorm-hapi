"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Plugin = (function () {
    function Plugin() {
        var _this = this;
        this.register = function (server, options, next) {
            server.bind(_this);
            console.log('registred');
            next();
        };
        this.register.attributes = {
            name: 'plugin',
            version: '0.1.0'
        };
    }
    return Plugin;
}());
exports.default = Plugin;
//# sourceMappingURL=plugin.js.map