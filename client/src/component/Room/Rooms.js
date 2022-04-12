


import container from '../img/container.gif';
import Room from './Room'
import {useSelector,useDispatch } from 'react-redux';
import { useEffect } from 'react';
//import { getRooms } from '../../actions/rooms';


const Rooms = ({currentId,setCurrentId}) => {

    const rooms = useSelector((state) => state.rooms);

    const dispatch = useDispatch();
    /* 
    useEffect(() => {
        dispatch(getRooms());
    },[currentId,dispatch,rooms.length])
 */
    const user = JSON.parse(localStorage.getItem('profile'));

    if (rooms.filter(room => user?.result?._id === room?.creator) === 0) return <h1>No rooms to display</h1>
    
    return (       
        !rooms.length ? 
    <div className="borderline">
            <img src={container} alt="" style={{width: '100%'}}/>
        </div>
        :
        (
            <div className="container">
                {rooms.filter(room => user?.result?._id === room?.creator).map((room)=>(
                <div key ={room._id}>
                    <Room room={room}
                     setCurrentId={setCurrentId}/>
                </div >
            ))}
            </div>

        )
    ); 
};

export default Rooms
