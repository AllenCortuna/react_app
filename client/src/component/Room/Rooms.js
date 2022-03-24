


import Room from './Room'
import {useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { getRooms } from '../../actions/rooms';


const Rooms = ({currentId,setCurrentId}) => {

    const rooms = useSelector((state) => state.rooms);

    useEffect(() => {
        getRooms();
    },[currentId,rooms]);

    return (       
        !rooms.length ? 
        <p>Loading ...</p>  :
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
};

export default Rooms
