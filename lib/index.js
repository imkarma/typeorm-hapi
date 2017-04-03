"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Plugin = (function () {
    function Plugin() {
        var _this = this;
        this.register = function (server, options, next) {
            server.bind(_this);
            console.log('Register');
            next();
        };
        this.register.attributes = {
            pkg: require('../package.json')
        };
    }
    return Plugin;
}());
exports.default = Plugin;
//# sourceMappingURL=index.js.map