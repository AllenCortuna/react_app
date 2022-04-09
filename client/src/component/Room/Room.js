


import {Button,} from 'react-bootstrap'
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { deleteRoom } from '../../actions/rooms';
import more from '../img/more.png';
import cancel from '../img/delete.png';

//<a href="https://www.flaticon.com/free-icons/delete" title="delete icons">Delete icons created by Alfredo Hernandez - Flaticon</a>
//<a href="https://www.flaticon.com/free-icons/more" title="more icons">More icons created by Freepik - Flaticon</a>
//<p className="font red quick">delete</p>
//<p className="quick font green">update</p> 


const Room  = ({ room, setCurrentId }) => {

    const dispatch = useDispatch();

    function downFunction() {
        setCurrentId(room._id);

        const section = document.querySelector( '#updateRoom' );
        section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
    }

    const user = JSON.parse(localStorage.getItem('profile'));

    return <div className="borderline" 
    style={{width:'15rem'}}>
    <img src={room.image} alt="" className='imgRoom'/>
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
            <td><p className="quick inline">Php</p> {room.price}</td>
        </tr>
        <tr>
            <td className='quick'>Category</td>
            <td>{room.category}</td>
        </tr>
        <tr>
            <td className='quick'>Status</td>
            {room.roomStatus ? <td className="quick green">Available</td> : <td className="grey">Unvailable</td> }
        </tr>
        <tr>
            <td className='quick'>Last Update</td>
            <td>{moment(room.updatedAt).fromNow()}</td>
        </tr>
    </tbody>
    </table>

{/*CONTROL BUTTON FOR ROOMS*/}
    <div className="grid">
        {(user?.result?.googleId === room?.creator || user?.result?._id === room?.creator) && (
      <Button variant="none"
      onClick={downFunction}>
      <img src={more} alt="" style={{width:'35%'}}/>
      </Button>
        )}

        {(user?.result?.googleId === room?.creator || user?.result?._id === room?.creator) && (
        <Button variant='none' onClick={() => dispatch(deleteRoom(room._id))}>
      <img src={cancel} alt="" style={{width:'35%'}}/>
        </Button>
        )}
    </div>   

</div>
    
    
    
    
}
export default Room
