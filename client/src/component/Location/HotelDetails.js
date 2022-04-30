import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams} from 'react-router-dom';
import { getRooms } from '../../actions/rooms';
import {Card,ListGroup,ListGroupItem}from 'react-bootstrap';
import { Grid } from '@mui/material';
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
  <Card style={{width: '100%'}} >
    <Card.Img variant="top" src={hotel.image} className='img'/>
  <ListGroup className="list-group">
    <ListGroupItem className='quick'>{hotel.hotelName}</ListGroupItem>
    <ListGroupItem className='font' disabled>{hotel.location}</ListGroupItem>
    <ListGroupItem className='font' disabled> {hotel.email}</ListGroupItem>
    <ListGroupItem className='font' disabled> {hotel.contact}</ListGroupItem>
  </ListGroup>
  <Card.Body>


  <Grid container 
    style={{padding:'3%'}}  
    spacing={1}
  >
        {rooms.filter(room => hotel._id === room?.creator).map((room)=>(

        <Grid item xs={12} md={6} xl={4} key={room._id} style={{alignSelf:'center'}}>
            <Room room={room} key={room._id}/>
        </Grid>

        ))}
    </Grid>
  </Card.Body>
</Card>


        </div>
}

export default HotelDetails
