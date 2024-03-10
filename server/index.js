import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth.js';

const app = express();

// Middleware: ------------------------------------------------------------------------------

app.use(express.json());
app.use(cookieParser());
app.use(cors({ credentials: true, origin: 'http://localhost:5173' }));
app.use(morgan('dev'));

// Database: --------------------------------------------------------------------------------

const database = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/auth');
        console.log('database is connected');
    } catch (err) {
        console.log(err.message);
    }
}

database();

// API: -------------------------------------------------------------------------------------

app.use('/auth', authRoutes);

app.listen(8000, () => {
    console.log(`Server is running on http://localhost:8000`);
})

// Error handling: --------------------------------------------------------------------------

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
})