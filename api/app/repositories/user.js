const User = require('../models/User');

exports.create = (user) => {
    return User.create(user)
}