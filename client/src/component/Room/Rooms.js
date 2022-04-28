import container from "../img/Searching.gif";
import Room from "./Room";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getOwnRooms } from '../../actions/rooms';

const Rooms = () => {
  const rooms = useSelector((state) => state.rooms);
  const user = JSON.parse(localStorage.getItem("profile"));
  const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getOwnRooms(user?.result._id));
    },[dispatch])

console.log(rooms.length);

  return !rooms.length ? (
    <div className="container" style={{height:'400px'}}>
      <img src={container} alt="" style={{ width: "15%" ,borderRadius:'23px'}} />
    </div>
  ) : (
    <div className="container">
      {rooms
        .filter((room) => user?.result?._id === room?.creator)
        .map((room) => (
          <div key={room._id}>
            <Room room={room} />
          </div>
        ))}
    </div>
  );
};

export default Rooms;
