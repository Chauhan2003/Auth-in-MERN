import jwt from 'jsonwebtoken';

const JWT_KEY = 'jh17263v27ft32'

export const generateToken = (payload) => {
    return jwt.sign(payload, JWT_KEY);
}