const bcrypt = require ('bcrypt');

const config = require('../config');

exports.hashPassword = (password) => {
    return bcrypt.hash(password, config.crypt.saltRounds)
}

exports.comparePassword = (password, hash) => {
    return bcrypt.compare(password, hash)
}