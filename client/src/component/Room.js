
import {Button,} from 'react-bootstrap'
import moment from 'moment';
import { useDispatch } from 'react-redux';

import { deleteRoom } from '../actions/rooms';
const Room  = ({ room, setCurrentId }) => {

const dispatch = useDispatch();

 return   <div className="borderline">
        <p className='quick'>{room.name}</p>
        <p className='font'>{room.price}</p>
        <p className='font'>{room.additionalInfo}</p>
        <p className='quick'>{room.roomStatus}</p>
        <p className='font'>{moment(room.createdAt).fromNow()}</p>
        <hr/>

    {/*CONTROL BUTTON FOR ROOMS*/}
        <div className="grid">
      <Button variant="primary"
      onClick={ ()=> setCurrentId(room._id)}>
      update
      </Button>
           
      <Button variant="danger" 
      onClick={ ()=> dispatch(deleteRoom(room._id))}>
      Delete
      </Button>
        </div>   

</div>
    
    
    
    
}
export default Room
