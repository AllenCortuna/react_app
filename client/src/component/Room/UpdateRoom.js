import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { createRoom, updateRoom } from "../../actions/rooms";
import FileBase from "react-file-base64";

const UpdateRoom = ({ currentId, setCurrentId }) => {
  const [roomData, setRoomData] = useState({
    hotelName: "",
    name: "",
    price: "",
    category: [],
    aircon: false,
    roomStatus: false,
    image: [],
  });
  const clear = () => {
    setCurrentId(0);
    setRoomData({
      name: "",
      price: "",
      category: [],
      aircon: false,
      roomStatus: false,
      image: [],
    });
  };
  // get login information
  const user = JSON.parse(localStorage.getItem("profile"));
  // to get the room data
  const room = useSelector((state) =>
    currentId ? state.rooms.find((name) => name._id === currentId) : null
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (!room?.name) clear();
    if (room) setRoomData(room);
    // eslint-disable-next-line
  }, [room, currentId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentId === 0) {
      dispatch(createRoom({ ...roomData, hotelName: user?.result?.hotelName }));
      clear();
    } else {
      dispatch(
        updateRoom(currentId, {
          ...roomData,
          hotelName: user?.result?.hotelName,
        })
      );
      clear();
    }
  };

  const toggleCheck = () => {
    roomData.roomStatus
      ? setRoomData({ ...roomData, roomStatus: false })
      : setRoomData({ ...roomData, roomStatus: true });
  };

  const toggleCategory = () => {
    roomData.roomStatus
      ? setRoomData({ ...roomData, category: false })
      : setRoomData({ ...roomData, category: true });
  };

  const handleImages = (image) => {
    const oldImages = roomData.image;
    const newImage = oldImages.concat(image);
    setRoomData({ ...roomData, image: newImage });
  };

  const handleCategory = (e) => {
    let category = roomData.category;
    if (category.includes(e.target.value)) {
      let index = category.indexOf(e.target.value);
      category.splice(index, 1);
      setRoomData({ ...roomData, category: category});
    } else {
      category.push(e.target.value);
      setRoomData({ ...roomData, category: category });
    }
    console.log(category);
  };

  return (
    <div className="borderline" id="updateRoom">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="quick">Create a room</Form.Label>
          <Form.Control
            type="text"
            maxLength="20"
            placeholder="Enter Room Name/No."
            value={roomData.name}
            onChange={(e) => setRoomData({ ...roomData, name: e.target.value })}
          />

          <Form.Control
            type="number"
            maxLength="10"
            placeholder="Enter Price"
            value={roomData.price}
            onChange={(e) =>
              setRoomData({ ...roomData, price: e.target.value })
            }
          />

          <FormGroup>
            <FormControlLabel
              control={<Checkbox value="Aircon" onClick={handleCategory} />}
              label="Aircon"
            />
            <FormControlLabel
              control={<Checkbox value="Single" onClick={handleCategory} />}
              label="Single"
            />
            <FormControlLabel
              control={<Checkbox value="Double Bed" onClick={handleCategory} />}
              label="Double Bed"
            />
            <FormControlLabel
              control={<Checkbox value="Queen Size" onClick={handleCategory} />}
              label="Queen Size"
            />
          </FormGroup>

          <Form.Check
            className="quick"
            type="checkbox"
            id="disabledFieldsetCheck"
            label="Available"
            checked={roomData.roomStatus}
            onChange={toggleCheck}
          />

          <div className="quick">
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) => handleImages(base64)}
            />
          </div>
          <p className="quick">
            total image(s): &nbsp; {roomData.image.length}
          </p>
        </Form.Group>

        <Button
          variant="dark"
          style={{ backgroundColor: "#41323b" }}
          className="link"
          type="submit"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default UpdateRoom;
