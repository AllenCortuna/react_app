


import Rooms from './Rooms';
import UpdateRoom  from './UpdateRoom';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getRooms } from '../../actions/rooms';

const RoomManagement = () => {

    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRooms());
    },[dispatch]);


return  <div className='container' >

        <Rooms setCurrentId={setCurrentId}/>
        <UpdateRoom currentId={currentId} 
                    setCurrentId={setCurrentId}/>
        
        <br/><br/>
         
        </div>

}

export default RoomManagement
