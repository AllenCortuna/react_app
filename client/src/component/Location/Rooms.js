
//import React, {useEffect, } from 'react';
//import { getRooms } from '../../actions/rooms';
import { useSelector} from 'react-redux';
import moment from 'moment';



const Rooms = ({hotelName}) => {
    
  //const dispatch = useDispatch();
  const rooms = useSelector((state) => state.rooms);
  /*  
  useEffect(() => {
    dispatch(getRooms());
  },[dispatch]);
*/
  return (<>
    {rooms.filter(room => room.hotelName === hotelName).map((room) => (
      <tr>
        <td>{room.name}</td>
        <td><p className="inline">&#8369; &nbsp;</p>{room.price}</td>
        {room.roomStatus ? 
        <td className="quick green">Available</td> : <td className="grey">Unvailable</td> }
        <td>{moment(room.updatedAt).fromNow()}</td>
      </tr>
        ) )};
        </> );
};
export default Rooms;
