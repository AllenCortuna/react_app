
import moment from 'moment';
//import { useDispatch } from 'react-redux';

//const dispatch = useDispatch();
//import { , deletePost } from '../../../actions/posts';
const Room  = ({ room, setCurrentId }) => {
    return<p>
    {room.name}
    {room.price}
    {room.adiitionalInfo}
    {room.roomStatus}
    {moment(room.createdAt).fromNow()}

    </p>
        
    
}
export default Room
