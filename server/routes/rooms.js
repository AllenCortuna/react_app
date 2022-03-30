import express from 'express';

import { getRooms,getRoom,createRoom,updateRoom,deleteRoom} from '../controlers/rooms.js';

const router = express.Router();

router.get('/', getRooms);
router.post('/', createRoom);
router.get('/:id', getRoom);
router.patch('/:id', updateRoom);
router.delete('/:id', deleteRoom);
 
export default router;
