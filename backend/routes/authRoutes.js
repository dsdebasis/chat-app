import express from 'express'
const router = express.Router();
import { signup,login,logout,removeAccount, } from '../controllers/auth.controller.js';

router.get('/home');
router.post('/signup',signup);
router.post('/login',login);
router.post('/logout',logout);
router.post('/deleteaccount',removeAccount)


export  default router;