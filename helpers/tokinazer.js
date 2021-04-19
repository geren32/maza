
const jwt = require('jsonwebtoken');

module.exports = (data) => {
    return {
        accessToken: jwt.sign(data, '12345', {expiresIn: '1h'}),
        // refreshToken: jwt.sign(data, '', {expiresIn: '30d'})

    };
};