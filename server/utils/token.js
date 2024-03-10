import jwt from 'jsonwebtoken';
import { errorHandler } from './error.js';

const JWT_KEY = 'jh17263v27ft32'

export const generateToken = (payload) => {
    return jwt.sign(payload, JWT_KEY);
}

export const isAuthenticated = async (req, res, next) => {
    try {
        const authToken = req.cookies.authToken;

        if (!authToken) {
            return next(errorHandler(401, 'Unauthorized - Token missing'));
        }

        jwt.verify(authToken, JWT_KEY, (err, user) => {
            if (err) {
                return next(errorHandler(401, 'Unauthorized - Token is invalid'))
            }

            req.user = user;
            next();
        })
    } catch (err) {
        next(err);
    }
}