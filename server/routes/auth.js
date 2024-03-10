import express from 'express';
import { handleLoginUser, handleLogoutUser, handleRegisterUser, handleUserInfo } from '../controllers/auth.js';
import { isAuthenticated } from '../utils/token.js';
const router = express.Router();

router.post('/login', handleLoginUser);
router.post('/register', handleRegisterUser);
router.get('/logout', isAuthenticated, handleLogoutUser);
router.get('/userinfo', isAuthenticated, handleUserInfo);

export default router;