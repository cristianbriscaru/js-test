const jwt = require('jsonwebtoken');

const config = require('../config');

exports.createTokens = (userId,email,name) => {
    const accessToken = jwt.sign(
        {
            sub: userId,
            email: email,
            name: name,
        },
        config.jwt.accessToken.secret,
        config.jwt.accessToken.options
    )

    const refreshToken = jwt.sign(
        {
            sub: userId,
        },
        config.jwt.refreshToken.secret,
        config.jwt.refreshToken.options
    )

    return {accessToken,refreshToken}
}

exports.verifyAccessToken = (accessToken) => {
    return jwt.verify(
        accessToken,
        config.jwt.accessToken.secret,
        {
            issuer: config.jwt.accessToken.options.issuer
        }
    )
}

exports.verifyRefreshToken = (refreshToken) => {
    return jwt.verify(
        refreshToken,
        config.jwt.refreshToken.secret,
        {
            issuer: config.jwt.refreshToken.options.issuer
        }
    )
}