import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams} from 'react-router-dom';
import { getRooms } from '../../actions/rooms';
import {Card,ListGroup,ListGroupItem}from 'react-bootstrap';
import Room from './Room';

const HotelDetails = () => {
    const dispatch = useDispatch();

    const { id } = useParams();

    const users = useSelector((state) => state.users);

    const hotel = users.find(user => user._id === id);

    const rooms = useSelector((state) => state.rooms);

    useEffect(() => {
       dispatch(getRooms());
    },[dispatch,]); 
    
    return <div className="container">
  <Card stye={{width: '100%'}} >
    <Card.Img variant="top" src={hotel.image} className='img'/>
  <ListGroup className="list-group">
    <ListGroupItem className='quick'>{hotel.hotelName}</ListGroupItem>
    <ListGroupItem className='font' disabled>{hotel.location}</ListGroupItem>
    <ListGroupItem className='font' disabled>{hotel.contact}</ListGroupItem>
  </ListGroup>
  <Card.Body>
                {rooms.filter(room => hotel._id === room?.creator).map((room)=>(
                <div key ={room._id}>
                    <Room room={room}/>
                </div >
            ))}
  </Card.Body>
</Card>


        </div>
}

export default HotelDetails
