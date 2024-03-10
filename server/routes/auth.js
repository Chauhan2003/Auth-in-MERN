import express from 'express';
import { handleRegisterUser } from '../controllers/auth.js';
const router = express.Router();

// router.post('/login', handleLoginUser);
router.post('/register', handleRegisterUser);

export default router;