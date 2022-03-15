import express from 'express';

import { getRoom,createRoom} from '../controlers/rooms.js';

const router = express.Router();

router.get('/', getRoom);
router.post('/', createRoom);
//router.get('/:id', getPost);
//router.patch('/:id', updatePost);
//router.delete('/:id', deletePost);
//router.patch('/:id/likePost', likePost);
 
export default router;
