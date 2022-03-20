
import {Button,} from 'react-bootstrap'
import moment from 'moment';
import { useDispatch } from 'react-redux';
import {GrMore} from "react-icons/gr";
import {FcDeleteColumn} from "react-icons/fc";
import { deleteRoom } from '../actions/rooms';
const Room  = ({ room, setCurrentId }) => {

const dispatch = useDispatch();

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
 
  function downFunction() {
    setCurrentId(room._id);
    console.log("scrollDown");
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

 return <div className="borderline">
        <p className='quick'>{room.name}</p>
        <p className='font'>{room.price}</p>
        <p className='font'>{room.category}</p>
        <p className='quick'>{room.roomStatus ? "available" : "unavailable"}</p>
        {/* <p className='font'>{moment(room.createdAt).fromNow()}</p>   */}
        <hr/>

{/*CONTROL BUTTON FOR ROOMS*/}
        <div className="grid">
      <Button variant="none"
      onClick={downFunction}>
       <GrMore/> 
      </Button>
           
      <Button variant="none" 
      onClick={ ()=> dispatch(deleteRoom(room._id))}>
      <FcDeleteColumn/>
      </Button>
        </div>   

</div>
    
    
    
    
}
export default Room
