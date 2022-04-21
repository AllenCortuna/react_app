

import UpdateRoom  from './UpdateRoom';
import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch } from 'react-redux';
//import { getRooms } from '../../actions/rooms';

const RoomManagement = () => {

    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();
    {/*  
    useEffect(() => {
        dispatch(getRooms());
    },[currentId,dispatch]);
*/}
return  <div className='container' >
    {/* 
            <Rooms setCurrentId={setCurrentId} 
                        currentId={currentId}/>
    */}
            <UpdateRoom currentId={currentId} 
                        setCurrentId={setCurrentId}/>
                
        </div>

}

export default RoomManagement
