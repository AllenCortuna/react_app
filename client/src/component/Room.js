
import moment from 'moment';
//import { useDispatch } from 'react-redux';

//const dispatch = useDispatch();
//import { , deletePost } from '../../../actions/posts';
const Room  = ({ room, setCurrentId }) => {
 return   <div className="borderline">
        <p className='quick'>{room.name}</p>
        <p>{room.price}</p>
        <p>{room.additionalInfo} </p>
        <p>{room.roomStatus}</p>
        <p>{moment(room.createdAt).fromNow()}</p>

</div>
    
    
    
    
}
export default Room
