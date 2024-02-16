import express from 'express'
import { sendMessage,getMessages } from '../controllers/msg.controllers.js';
import protectRoute from '../middleware/protectedRoutes.js';
const router = express.Router();

router.get('/:id',protectRoute,getMessages)
router.post('/send/:id',protectRoute,sendMessage);

export default router;

