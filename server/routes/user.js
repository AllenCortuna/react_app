import express from 'express';
const router = express.Router();


import {getUsers,signin , signup} from '../controlers/user.js';


router.get('/', getUsers);
router.post('/signin', signin);
router.post('/signup', signup);

export default router;
