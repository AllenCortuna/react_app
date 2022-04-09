import header from '../img/header.png';
import { getUsers} from '../../actions/auth';
import {Card,ListGroup,ListGroupItem}from 'react-bootstrap';
import dorm from '../img/dorm.png';
import React, {useEffect, } from 'react';
import {useSelector, useDispatch } from 'react-redux';
import { getRooms } from '../../actions/rooms';
import Rooms from './Rooms'
//<img src={dorm} alt="" className='imglogo'/> 
const Location = () => {
    const dispatch = useDispatch();

    useEffect(() => {
       dispatch(getUsers());
    },[dispatch,]);

    const users = useSelector((state) => state.data);
    return <div className="container">
    

        {users.map((a)=>(

   <Card style={{ width: '100%',marginTop: '3%' }}>
  <Card.Img variant="top" src={a.image} />
  <Card.Body>
    <Card.Title className='poppin center'>{a.hotelName}</Card.Title>
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
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>{a.location}</ListGroupItem>
    <ListGroupItem>{a.email}</ListGroupItem>
    <ListGroupItem>{a.contact}</ListGroupItem>
  </ListGroup>
</Card>

        )) }

        </div>
}
export default Location;
