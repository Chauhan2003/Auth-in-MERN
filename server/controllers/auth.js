import User from "../models/user.js";
import { comparePassword, hashPassword } from '../utils/password.js';
import { errorHandler } from '../utils/error.js';
import { generateToken } from "../utils/token.js";

export const handleRegisterUser = async (req, res, next) => {
    try {
        const { username, email, password, confirmpassword } = req.body;

        if (!username || !email || !password || !confirmpassword) {
            return next(errorHandler(400, "All fields are required"));
        }

        if (password !== confirmpassword) {
            return next(errorHandler(400, "Passwords do not match"));
        }

        if (password.length < 7) {
            return next(errorHandler(400, "Password must be at least 7 characters long"))
        }

        const userExist = await User.findOne({ email });

        if (userExist) {
            return next(errorHandler(400, "Email already in use"));
        }

        const hashedPassword = await hashPassword(password);

        const newUser = await User.create({
            username,
            email,
            password: hashedPassword
        })

        res.status(201).json({
            success: true,
            message: "Registeration Successfull",
            user: {
                _id: newUser._id,
                username: newUser.username,
                email: newUser.email
            }
        })
    } catch (err) {
        next(err);
    }
}

export const handleLoginUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return next(errorHandler(400, "All fields are required"))
        }

        const userExist = await User.findOne({ email });

        if (!userExist) {
            return next(errorHandler(400, "User not exist"));
        }

        const isValidPassword = await comparePassword(password, userExist.password);

        if (!isValidPassword) {
            return next(errorHandler(400, "Invalid Email or Password"));
        }

        const token = generateToken({
            _id: userExist._id,
            email: userExist.email
        }, { expiresIn: '1h' });

        res.cookie('authToken', token, {
            httpOnly: true,
            maxAge: 3600000
        })

        res.status(200).json({
            success: true,
            message: "Login Successfull",
            user: {
                _id: userExist._id,
                username: userExist.username,
                email: userExist.email
            }
        })
    } catch (err) {
        next(err);
    }
}