import express from 'express';
import protectRoute from '../middleware/protectedRoutes.js';
import friendList from '../controllers/frndl.controller.js'
const router = express.Router();

router.get('/friends',protectRoute,friendList);
export default router; 