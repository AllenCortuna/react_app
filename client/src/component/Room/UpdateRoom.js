

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useDispatch, useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react'
import {Form,Button} from 'react-bootstrap'
import {createRoom,updateRoom} from '../../actions/rooms'
//import FileBase from 'react-file-base64';

const UpdateRoom = ({currentId, setCurrentId }) => {
  //file image upload
    let fileObj = [];
    let fileArray = [];

  const uploadMultipleFiles = (e) => {
      fileObj.push(e.target.files)
      for (let i = 0; i < this.fileObj[0].length; i++) {
        fileArray.push(URL.createObjectURL(this.fileObj[0][i]))
        }
        setRoomData({ ...roomData, image: fileArray })
    }
 
  //category toggle
  const [formats, setFormats] = useState([]);
  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
  };

  const [roomData, setRoomData] = useState({
    hotelName: '',
    name: '', 
    price: '', 
    category:'',
    roomStatus:false,
    image: {

    }
  });
  const user = JSON.parse(localStorage.getItem('profile'));

  const room = useSelector((state) => (currentId ? state.rooms.find((name) => name._id === currentId) : null));
 
  const dispatch = useDispatch();

  useEffect(() => {
    if (!room?.name) clear();
    if (room) setRoomData(room);
    // eslint-disable-next-line
  }, [room,currentId]);

  const clear = () => {
      setCurrentId(0);
      setRoomData({   
        name: '', 
        price: '', 
        category: '', 
        roomStatus:false,
        image: ''
      });
  };

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

  <ToggleButtonGroup
        value={formats}
        onChange={handleFormat}
        aria-label="text formatting"
      >
        <ToggleButton value="Aircon" aria-label="bold">
        Aircon 
        </ToggleButton>
        <ToggleButton value="Single Bed" aria-label="italic">
        Single Bed
        </ToggleButton>
        <ToggleButton value="Double Bed" aria-label="underlined">
         Double Bed 
        </ToggleButton>
      </ToggleButtonGroup>


    <Form.Check
    type="checkbox"
    id="disabledFieldsetCheck"
    label="Available"
    checked={roomData.roomStatus}
    onChange={toggleCheck}/>    

            <form>
                <div className="form-group multi-preview">
                    {(fileArray || []).map(url => (
                        <img src={url} alt="..." />
                    ))}
                </div>
 
                <div className="form-group">
                    <input type="file" className="form-control" onChange={uploadMultipleFiles} multiple />
                </div>
            </form >

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
