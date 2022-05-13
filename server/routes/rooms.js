import express from 'express';
import { getRooms,getRoom,getOwnRooms,createRoom,updateRoom,deleteRoom} from '../controlers/rooms.js';

const router = express.Router();
import auth from '../middleware/auth.js'


router.get('/', getRooms);
router.get('/',auth, getOwnRooms);
router.post('/',auth, createRoom);
router.get('/:id',auth, getRoom);
router.patch('/:id',auth, updateRoom);
router.delete('/:id',auth, deleteRoom);
 
export default router;
