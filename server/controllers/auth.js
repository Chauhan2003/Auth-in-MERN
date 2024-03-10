import User from "../models/user.js";
import { hashPassword } from '../utils/password.js';
import { errorHandler } from '../utils/error.js';

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