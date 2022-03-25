import {signin , signup} from '../controllers/user.js';
import express from 'express';
const router = express.Router();

router.post('/signin', signin);
router.post('/signup', signup);

export default router;

