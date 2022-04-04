import { Link } from 'react-router-dom';
import Room from './Room/Room'
import {useSelector,useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getRooms } from '../actions/rooms';
const Location = () => {


    const rooms = useSelector((state) => state.rooms);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRooms());
    },[rooms.length,dispatch])

    const user = JSON.parse(localStorage.getItem('profile'));
    return (       
        !rooms.length ? 
        <p className='quick' style={{color:'rgb(245,245,245)'}}>Loading ...</p>  :
        (
            <div className="container">
                {rooms.map((room)=>(
                <div key ={room._id}>
                    <Room room={room}
                     setCurrentId={setCurrentId}/>
                </div >
            ))}
            </div>

        )
    ); 





}

export default Location
