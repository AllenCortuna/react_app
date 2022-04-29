import { Button } from "react-bootstrap";
import moment from "moment";
import { useDispatch } from "react-redux";
import { deleteRoom } from "../../actions/rooms";
import more from "../img/more.png";
import cancel from "../img/delete.png";
import { updateRoom } from "../../actions/rooms";
import React, { useState } from "react";
//<a href="https://www.flaticon.com/free-icons/delete" title="delete icons">Delete icons created by Alfredo Hernandez - Flaticon</a>
//<a href="https://www.flaticon.com/free-icons/more" title="more icons">More icons created by Freepik - Flaticon</a>
//<p className="font red quick">delete</p>
//<p className="quick font green">update</p>

const Room = ({ room }) => {
  const dispatch = useDispatch();
  function handleUpdate() {
    const id = room._id;
    const status = !room.roomStatus;
    console.log(status);
    dispatch(
      updateRoom(id, {
        ...room,
        roomStatus: status,
      })
    );
  }

  const user = JSON.parse(localStorage.getItem("profile"));

  return (
    <div className="borderline" style={{ width: "14rem" }}>
      <img src={room.image[0]} alt="" className="imgRoom" />
      <table>
        <thead>
          <tr>
            <th className="quick">Room No/Name:</th>
            <th style={{ fontSize: "14px" }} className="quick">
              {room.name}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="quick">Price</td>
            <td>
              <p className="quick inline">Php</p> {room.price}
            </td>
          </tr>
          <tr>
            <td className="quick">Category</td>
            <td>{room.category}</td>
          </tr>
          <tr>
            <td className="quick">Status</td>
            {room.roomStatus ? (
              <td className="quick green">Available</td>
            ) : (
              <td className="grey">Unvailable</td>
            )}
          </tr>
          <tr>
            <td className="quick">Last Update</td>
            <td>{moment(room.updatedAt).fromNow()}</td>
          </tr>
        </tbody>
      </table>

      {/*CONTROL BUTTON FOR ROOMS*/}
      <div className="grid">
        {(user?.result?.googleId === room?.creator ||
          user?.result?._id === room?.creator) && (
          <Button variant="none" onClick={handleUpdate}>
            <p className="quick font green center">UPDATE</p>
          </Button>
        )}

        {(user?.result?.googleId === room?.creator ||
          user?.result?._id === room?.creator) && (
          <Button variant="none" onClick={() => dispatch(deleteRoom(room._id))}>
            <img src={cancel} alt="" style={{ width: "35%" }} />
          </Button>
        )}
      </div>
    </div>
  );
};
export default Room;
