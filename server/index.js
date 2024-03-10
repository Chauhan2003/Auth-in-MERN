import express from 'express';
import mongoose from 'mongoose';
import authRoutes from './routes/auth.js'

const app = express();

// Middleware:
app.use(express.json());

const database = async() => {
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/auth');
        console.log('database is connected');
    } catch(err){
        console.log(err.message);
    }
}

database();

// API:
app.use('/auth', authRoutes);

app.listen(8000, ()=>{
    console.log(`Server is running on http://localhost:8000`);
})