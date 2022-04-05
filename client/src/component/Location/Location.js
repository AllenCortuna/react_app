//import header from '../img/header.png';
//<img src={header} alt="" className='img'/>
import { getUsers} from '../../actions/auth';
import Accordion from 'react-bootstrap/Accordion';
import dorm from '../img/dorm.png';
import React, {useEffect, } from 'react';
import {useSelector, useDispatch } from 'react-redux';
import { getRooms } from '../../actions/rooms';
import Rooms from './Rooms'
    //filter((value, index, self) =>index === self.findIndex((room) => (room.hotelName === value.hotelName )))

const Location = () => {
    const dispatch = useDispatch();

    useEffect(() => {
       dispatch(getUsers());
    },[dispatch,]);

    const users = useSelector((state) => state.data);

    return <div className="container">
    
        {users.map((a)=>(
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
