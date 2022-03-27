
import {Button,} from 'react-bootstrap'
import moment from 'moment';
import { useDispatch } from 'react-redux';
import {GrMore} from "react-icons/gr";
import {FcDeleteColumn} from "react-icons/fc";
import { deleteRoom } from '../../actions/rooms';

const Room  = ({ room, setCurrentId }) => {

    const dispatch = useDispatch();
 
    function downFunction() {
        window.scrollTo(0, 50000);
        setCurrentId(room._id);
  }

    return <div className="borderline" 
    style={{width:'15rem'}}>
    <table>
        <thead>
        <tr>
            <th className="quick">Room No/Name:</th>
            <th style={{fontSize: '14px'}} 
                className='quick'>{room.name}</th>
        </tr>
        </thead>
    <tbody>
        <tr>
            <td className='quick'>Price</td>
            <td>Php {room.price}</td>
        </tr>
        <tr>
            <td className='quick'>Category</td>
            <td>{room.category}</td>
        </tr>
        <tr>
            <td className='quick'>Status</td>
            {room.roomStatus ? <td className="green">Available</td> : <td className="red">Unvailable</td> }
        </tr>
        <tr>
            <td className='quick'>Last Update</td>
            <td>{moment(room.updatedAt).fromNow()}</td>
        </tr>
    </tbody>
    </table>

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
