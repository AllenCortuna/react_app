


import Rooms from './Rooms';
import UpdateRoom  from './UpdateRoom';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getRooms } from '../actions/rooms';
import LinkTo from './Link';

const RoomManagement = () => {
    const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRooms());
    }, [currentId, dispatch]);

    {/*TOGGLE UPDATE ROOM CONTROL */}   
    return  <div className='container' >

        <Rooms setCurrentId={setCurrentId}/>
        <UpdateRoom currentId={currentId} setCurrentId={setCurrentId}/>
<br/><br/>
<LinkTo path={'/RoomStatus'} label={'Room Status'}/>
        
    </div>

}

export default RoomManagement
