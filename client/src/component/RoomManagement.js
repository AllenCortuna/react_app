


import Rooms from './Rooms';
import UpdateRoom  from './UpdateRoom';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getRooms } from '../actions/rooms';
import LinkTo from './Link';

const RoomManagement = () => {
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRooms(currentId));
    }, [currentId, dispatch]);

    {/*TOGGLE UPDATE ROOM CONTROL */}   
    return  <div className='container' >

        <Rooms setCurrentId={setCurrentId}/>
        <UpdateRoom currentId={currentId} setCurrentId={setCurrentId}/>

        <LinkTo path={'/RoomManagement'} label={'Room Management'}/>
        
    </div>

}

export default RoomManagement
