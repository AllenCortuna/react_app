import { useDispatch, useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react'
import {Form,Button} from 'react-bootstrap'
import {createRoom,updateRoom} from '../actions/rooms'

const CreateRoom = ({currentId, setCurrentId }) => {


    const [roomData, setRoomData] = useState({
        name: '', 
        price: '',  
        additionalInfo:'',
        roomStatus:'unavailable'});
    
    const room = useSelector((state) => (currentId ? state.rooms.find((price) => price._id === currentId) : null));
   
    const dispatch = useDispatch();

    useEffect(() => {
    if (room) setRoomData(room);
  }, [room]);
 
    const clear = () => {
    setCurrentId(0);
    setRoomData({ name: '', price: '', additionalInfo: '', roomStatus:'unavailable'});
  };

    const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentId === 0) {
        dispatch(createRoom(roomData));
        console.log("createRoom(roomData)");
        clear();
    } else {
        console.log("updatedRoom");
        dispatch(updateRoom(currentId, roomData));
        clear();
    }
  };


return <div className="borderline">
        
<Form>   
    <Form.Group className="mb-3" 
    controlId="formBasicEmail">
      
    <Form.Label className='quick'>{currentId ? `Updating Room "${room.name}"` : "Create a room "}</Form.Label>
    <Form.Control type="text" 
    placeholder="Enter Room Name/No." 
    value={roomData.name} 
    onChange={(e) => 
            setRoomData({ ...roomData, name: e.target.value })} />

    <Form.Label>Price</Form.Label>
    <Form.Control type="text" 
    placeholder="Enter Price" 
    value={roomData.price}
    onChange={(e) => 
            setRoomData({ ...roomData, price: e.target.value })} />    


    <Form.Label>Additional info</Form.Label>
    <Form.Control type="text" 
    placeholder="Enter Price" 
    value={roomData.additionalInfo}
    onChange={(e) => 
            setRoomData({ ...roomData, additionalInfo: e.target.value })} />    
  

    <Form.Label>Room Status</Form.Label>
    <Form.Control type="text" 
    placeholder="Enter Price" 
    value={roomData.roomStatus}
    onChange={(e) => 
            setRoomData({ ...roomData, roomStatus: e.target.value })} />    
  </Form.Group>


<Button variant="primary" 
    type="submit" 
    onClick={handleSubmit}>
    Submit
  </Button>
</Form>
        </div> 

}

export default CreateRoom
