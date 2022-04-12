


import container from '../img/container.gif';
import { getUsers} from '../../actions/auth';
import dorm from '../img/dorm.png';
import React, {useEffect, } from 'react';
import {useSelector, useDispatch } from 'react-redux';
import { getRooms } from '../../actions/rooms';
import Rooms from './Rooms';
import Hotel from './Hotel';



//<a href="https://www.flaticon.com/free-animated-icons/delivery" title="delivery animated icons">Delivery animated icons created by Freepik - Flaticon</a>


const Location = () => {
    const dispatch = useDispatch();

    useEffect(() => {
       dispatch(getUsers());
    },[dispatch,]);

    const users = useSelector((state) => state.users);

    return <div className="container">

        {users?.length === 0 && 
        <div className="borderline">
            <img src={container} alt="" style={{width: '100%'}}/>
            </div>}

        {users?.map((user)=>(
            <Hotel user={user} key={user._id}/>
        )) }

        </div>
}
export default Location;
