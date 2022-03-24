
import {Button,} from 'react-bootstrap'
import Moment from 'react-moment';
import { useDispatch } from 'react-redux';
import {GrMore} from "react-icons/gr";
import {FcDeleteColumn} from "react-icons/fc";
import { deleteRoom } from '../../actions/rooms';
import React, { useState, useEffect } from 'react';
import { getRooms } from '../../actions/rooms';

const Room  = ({ room, setCurrentId }) => {

    const dispatch = useDispatch();
 
    function downFunction() {
        window.scrollTo(0, 50000);
        setCurrentId(room._id);
        console.log("room id: ",room._id);
  }
    
    useEffect(() => {
        getRooms()
    },[])

    return <div className="borderline" 
    style={{width:'15rem'}}>
    <table>
        <thead>
        <tr>
            <th style={{fontSize: '14px'}} 
                className='quick'
                colSpan='2'>{room.name}</th>
        </tr>
        </thead>
    <tbody>
        <tr>
            <td className='quick'>Price</td>
            <td>{room.price}</td>
        </tr>
        <tr>
            <td className='quick'>Category</td>
            <td>{room.category}</td>
        </tr>
        <tr>
            <td className='quick'>Status</td>
            <td>{room.roomStatus ? "Available" : "Unavailable"}</td>
        </tr>
        <tr>
            <td className='quick'>Last Update</td>
            {/*  <td>{moment(room.updatedAt).fromNow()}</td>*/}
            <td><Moment format="MM/DD/YY H:MM" 
 date={room.updatedAt}/></td>
        </tr>
    </tbody>
    </table>
        <hr/>

{/*CONTROL BUTTON FOR ROOMS*/}
    <div className="grid">
      <Button variant="none"
      onClick={downFunction}> 
       <GrMore/> 
      </Button>
           
      <Button variant="none" 
      onClick={ ()=> dispatch(deleteRoom(room._id))}>
      <FcDeleteColumn/>
      </Button>
    </div>   

</div>
    
    
    
    
}
export default Room

