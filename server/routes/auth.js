import express from 'express';
const router = express.Router();

router.post('/login', handleLoginUser);
router.post('/register', handleRegisterUser);

export default router;