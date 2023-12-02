'use strict';
var jwt = require('jsonwebtoken');
var authConfig = require('config').get('authConfig');

exports.getAccessToken = (user, session) => {
    try {
        var claims = {
            session: session.id,
            user: user.id,
        };
        return jwt.sign(claims, authConfig.secret, {
            expiresIn: authConfig.tokenPeriod,
        });
    }
    catch (error) {
        throw error
    }
};

exports.getAdminAccessToken = (user, session) => {
    try {
        var claims = {
            session: session.id,
            user: user.id,
        };
        return jwt.sign(claims, authConfig.secret, {
            expiresIn: authConfig.adminTokenPeriod,
        });
    }
    catch (error) {
        throw error
    }
};

exports.getRefreshToken = (user) => {
    try {
        var claims = {
            user: user.id,
        };
        return jwt.sign(claims, authConfig.secret, {
            expiresIn: authConfig.tokenPeriod,
        });
    }
    catch (error) {
        throw error
    }
};

exports.verifyToken = (token) => {
    try {
        return jwt.verify(token, authConfig.secret);
    }
    catch (error) {
        throw error
    }
};
