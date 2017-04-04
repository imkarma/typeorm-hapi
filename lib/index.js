"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function () {
    return {
        register: function (server, option, next) {
            _this.attributes = {
                pkg: require('../package.json')
            };
            console.log('Register');
            next();
        }
    };
};
//# sourceMappingURL=index.js.map