

import { useDispatch, useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react'
import {Form,Button} from 'react-bootstrap'
import {createRoom,updateRoom} from '../../actions/rooms'
import FileBase from 'react-file-base64';

const UpdateRoom = ({currentId, setCurrentId }) => {

  const [roomData, setRoomData] = useState({
    hotelName: '',
    name: '', 
    price: '', 
    category:'',
    roomStatus:false,
    image: [],
  });

  const clear = () => {
      setCurrentId(0);
      setRoomData({   
        name: '', 
        price: '', 
        category: '', 
        roomStatus:false,
        image: []
      });
  };

  const user = JSON.parse(localStorage.getItem('profile'));

  const room = useSelector((state) => (currentId ? state.rooms.find((name) => name._id === currentId) : null));
 
  const dispatch = useDispatch();

  useEffect(() => {
    if (!room?.name) clear();
    if (room) setRoomData(room);
    // eslint-disable-next-line
  }, [room,currentId]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentId === 0){
      dispatch(createRoom({...roomData, hotelName: user?.result?.hotelName}));
      clear();
    } else {
      dispatch(updateRoom(currentId,{...roomData, hotelName: user?.result?.hotelName}));
      clear();
    }
  };

  const toggleCheck = () => {
    roomData.roomStatus ? setRoomData({...roomData, roomStatus: false}) : setRoomData({...roomData, roomStatus: true})}

  const handleImages = (image) => {
    const oldImages = roomData.image;
    const newImage = oldImages.concat(image)
    setRoomData({...roomData, image: newImage})
    console.log(roomData.image.length );
  }
  return <div className="borderline" id='updateRoom'>
        
  <Form>   
    <Form.Group className="mb-3" 
    controlId="formBasicEmail">
      
    <Form.Label className='quick'>{currentId ? `Updating ${room.name}` : "Create a room "}</Form.Label>
    <Form.Control type="text" 
    maxLength="20"
    placeholder="Enter Room Name/No." 
    value={roomData.name} 
    onChange={(e) => 
            setRoomData({ ...roomData, name: e.target.value })} />

    <Form.Control type="number" 
    maxLength="10"
    placeholder="Enter Price" 
    value={roomData.price}
    onChange={(e) => 
            setRoomData({ ...roomData, price: e.target.value })} />    

  <Form.Control type="text" 
  maxLength="20"
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

    <div className='quick'>
      <FileBase type="file" multiple={false} onDone={({ base64 }) => handleImages(base64)} /> 
    </div>
<p>total image: &nbsp; {roomData.image.length}</p>  

  </Form.Group>

  <Button variant="dark" 
    style={{backgroundColor: '#41323b'}}
    className='link' 
    type="submit" 
    onClick={handleSubmit}>
    Submit
    </Button>
  </Form>
        </div> 

}

export default UpdateRoom
