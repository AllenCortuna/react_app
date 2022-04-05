


import Room from './Room'
import {useSelector,useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getRooms } from '../../actions/rooms';


const Rooms = ({currentId,setCurrentId}) => {

    const rooms = useSelector((state) => state.rooms);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRooms());
    },[currentId,dispatch,rooms.length])

    const user = JSON.parse(localStorage.getItem('profile'));
    return (       
        !rooms.length ? 
        <p className='quick' style={{color:'rgb(245,245,245)'}}>Loading ...</p>  :
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
