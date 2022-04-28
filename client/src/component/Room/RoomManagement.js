import UpdateRoom from "./UpdateRoom";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {useNavigate } from "react-router-dom";
import manage from "../img/document.png";
import { Button } from "react-bootstrap";


//import { getRooms } from '../../actions/rooms';
const RoomManagement = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const history = useNavigate()
  const push = () => {history("/updateRooms")}
  /*  
    useEffect(() => {
        dispatch(getRooms());
    },[currentId,dispatch]);
   */
  return (
    <div className="container">
      <Button onClick={push} style={{backgroundColor:'white',color:'black'}} variant='none' className='quick'>
        <img src={manage} alt="" className="imglogo" />
        Update Rooms
      </Button>
      <UpdateRoom currentId={currentId} setCurrentId={setCurrentId} />
    </div>
  );
};

export default RoomManagement;
