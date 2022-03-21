


import { useDispatch, useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react'
import {Form,Button} from 'react-bootstrap'
import {createRoom,updateRoom,getRooms} from '../../actions/rooms'

const UpdateRoom = ({currentId, setCurrentId }) => {

    const [roomData, setRoomData] = useState({
        name: '', 
        price: '',  
        category:'',
        roomStatus:false});

    const room = useSelector((state) => (currentId ? state.rooms.find((price) => price._id === currentId) : null));
   
    const dispatch = useDispatch();

    useEffect(() => {
        if (room) setRoomData(room);
        getRooms()
    }, [room]);

    const clear = () => {
    setCurrentId(0);
        setRoomData({   name: '', 
                        price: '', 
                        category: '', 
                        roomStatus:false});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (currentId === 0){
            dispatch(createRoom(roomData));
            dispatch(getRooms)
            clear();
        } else {
            dispatch(updateRoom(currentId,roomData));
            clear();
        }
    };

    const toggleCheck = () => {
        roomData.roomStatus ? setRoomData({...roomData, roomStatus: false}) : setRoomData({...roomData, roomStatus: true})
    }

return <div className="borderline">
        
<Form>   
    <Form.Group className="mb-3" 
    controlId="formBasicEmail">
      
    <Form.Label className='quick'>{currentId ? `Updating Room ${room.name}` : "Create a room "}</Form.Label>
    <Form.Control type="text" 
    maxLength="20"
    placeholder="Enter Room Name/No." 
    value={roomData.name} 
    onChange={(e) => 
            setRoomData({ ...roomData, name: e.target.value })} />

    <Form.Control type="text" 
    maxLength="10"
    placeholder="Enter Price" 
    value={roomData.price}
    onChange={(e) => 
            setRoomData({ ...roomData, price: e.target.value })} />    


    <Form.Control type="text" 
    maxLength="10"
    placeholder="category" 
    value={roomData.category}
    onChange={(e) => 
            setRoomData({ ...roomData, category: e.target.value })} />    
    
    <Form.Check
    type="checkbox"
    id="disabledFieldsetCheck"
    label="Available"
    checked={roomData.roomStatus}
    onChange={toggleCheck}/>    

  </Form.Group>

    <Button variant="primary" 
    type="submit" 
    onClick={handleSubmit}>
    Submit
    </Button>
</Form>
        </div> 

}


export default UpdateRoom
