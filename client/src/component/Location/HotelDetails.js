import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { useParams, useNavigate } from 'react-router-dom';
import { getOwnRooms } from '../../actions/rooms';
//import Room from './Room';

const HotelDetails = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const users = useSelector((state) => state.users);
    const hotel = users.find(user => user._id === id);
    console.log('hotel data',hotel);
    useEffect(() => {
       dispatch(getOwnRooms(id));
    },[dispatch,]); 
    
    return <div className="borderline">
        <img src={hotel.image} alt="" className="img"/>
        <h1>{hotel.hotelName}</h1>
        <p className="quick">{id}</p>
        </div>
}

export default HotelDetails
