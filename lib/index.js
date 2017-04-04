"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.plugin = {
    register: function (server, option, next) {
        // this.attributes = {
        //     pkg: require('../package.json')
        // };
        console.log('Register');
        next();
    }
};
//# sourceMappingURL=index.js.map