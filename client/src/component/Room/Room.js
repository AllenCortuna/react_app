
import {Button,} from 'react-bootstrap'
import moment from 'moment';
import { useDispatch } from 'react-redux';
import {GrMore} from "react-icons/gr";
import {FcDeleteColumn} from "react-icons/fc";
import { deleteRoom } from '../../actions/rooms';
//import { getRooms } from '../../actions/rooms';

const Room  = ({ room, setCurrentId }) => {

    const dispatch = useDispatch();
 
    function downFunction() {
        console.log("scrollDown");
        window.scrollTo(0, 50000);
        setCurrentId(room._id);
        console.log(room._id);
  }


    return <div className="borderline" 
    style={{width:'15rem'}}>
    <table>
        <tr>
            <th style={{fontSize: '14px'}} 
                className='quick'
                colSpan='2'>{room.name}</th>
        </tr>
        <tr>
            <td className='quick'>Price</td>
            <td>{room.price}</td>
        </tr>
        <tr>
            <td className='quick'>Category</td>
            <td>{room.category}</td>
        </tr>
        <tr>
            <td className='quick'>Status</td>
            <td>{room.roomStatus ? "Available" : "Unavailable"}</td>
        </tr>
        <tr>
            <td className='quick'>Last Update</td>
            <td>{moment(room.updatedAt).fromNow()}</td>
            {/* <td>{moment(room.updatedAt).format("MMM-DD-YY h:mm")}</td>  */}
        </tr>
    </table>
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
