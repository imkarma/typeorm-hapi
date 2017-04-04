export function register (server, options, next) {
    console.log('registred');
    next();
};

exports.register.attributes = { pkg: require('../package.json') };