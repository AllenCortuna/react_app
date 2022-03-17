import { useDispatch, useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react'
import {Form,Button} from 'react-bootstrap'
import {createRoom,updateRoom} from '../actions/rooms'



const CreateRoom = ({currentId, setCurrentId }) => {


    const [roomData, setRoomData] = useState({
        name: '', 
        price: '',  
        adiitionalInfo:'',
        roomStatus: false});

    const room = useSelector((state) => (currentId ? state.rooms.find((message) => message._id === currentId) : null));
   
    const dispatch = useDispatch();

    useEffect(() => {
    if (room) setRoomData(room);
  }, [room]);
 
    const clear = () => {
    setCurrentId(0);
    setRoomData({ name: '', price: '', additionalInfo: '', roomStatus: false });
  };

    const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createRoom(roomData));
      clear();
    } else {
      dispatch(updateRoom(currentId, roomData));
      clear();
    }
  };

    //handleChange(e) {              
    //setRoomData({...roomData, roomStatus : true});
    //}
return <div className="borderline">
<Form>
    <Form.Group className="mb-3" 
    controlId="formBasicEmail"
    onSubmit={handleSubmit}
>
      
    <Form.Label>Room No.</Form.Label>
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
    placeholder="category/features" 
    value={roomData.additionalInfo}
    onChange={(e) => 
            setRoomData({ ...roomData, additionalInfo: e.target.value })} />    

  
    <Form.Check 
    type="checkbox" 
    label="Available?" 
    onChange={e => 
            setRoomData({ ...roomData, additionalInfo: e.target.value })} />    


  </Form.Group>


  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
        </div> 

}

export default CreateRoom
