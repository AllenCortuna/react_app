
//import header from '../img/header.png';
//<img src={header} alt="" className='img'/>
import Accordion from 'react-bootstrap/Accordion';
import dorm from '../img/dorm.png';
import React, {useEffect, } from 'react';
import {useSelector, useDispatch } from 'react-redux';
import { getUsers,getRooms } from '../../actions/rooms';
import Rooms from './Rooms'

const Location = () => {

    const dispatch = useDispatch();
    const rooms = useSelector((state) => state.rooms);

    useEffect(() => {
        dispatch(getRooms());
    },[dispatch]);


    return <div className="container">
    
        {rooms.filter((value, index, self) =>
            index === self.findIndex((room) => (room.hotelName === value.hotelName ))).map((a)=>(
        <Accordion style={ { width: '100%' }}>
        <Accordion.Item eventKey="0">
        
        <Accordion.Header>
        <img src={dorm} alt="" className='imglogo'/> 
        <p className="quick">{a.hotelName}</p>
        </Accordion.Header>

        <Accordion.Body>
            
        <table>
            <thead>
                <tr>
                <th className="quick">name</th>
                <th className="quick">price</th>
                <th className="quick">status</th>
                <th className="quick">updated</th>
                </tr>
            </thead>

            <tbody>
            <Rooms hotelName={a.hotelName}/>
            </tbody>
        </table>
        </Accordion.Body>
        </Accordion.Item>
        </Accordion>)) }

        </div>
}
export default Location;
