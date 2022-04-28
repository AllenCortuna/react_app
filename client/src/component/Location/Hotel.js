import { getRooms } from "../../actions/rooms";
import { useNavigate } from "react-router-dom";
import { Card, ListGroup, ListGroupItem, Spinner } from "react-bootstrap";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import topFunction from '../function/function'

const Hotel = ({ user }) => {
  const rooms = useSelector((state) => state.rooms);
  const navigate = useNavigate();
  const openHotel = (e) => {
    navigate(`/hotels/${user._id}`);
    topFunction();
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRooms());
  }, [dispatch, rooms.length]);

  const active = rooms
    ?.filter((room) => room.creator === user._id)
    .filter((room) => room.roomStatus === true).length;

  return (
    <div key={user._id} onClick={openHotel} className="inline">
      <Card className="card" style={{ width: "320px" }}>
        <Card.Img variant="top" src={user.image} className="img" />
        <ListGroup className="list-group">
          <ListGroupItem className="quick">{user.hotelName}</ListGroupItem>

          <ListGroupItem className="font">
            <p className="inline quick ">
              room available: &nbsp;
              {!rooms.length ? (
                <Spinner animation="border" role="status" size="sm">
                  {" "}
                </Spinner>
              ) : (
                <p className="green quick inline">{active}</p>
              )}
            </p>
          </ListGroupItem>

          <ListGroupItem className="font" disabled>
            {user.location}
          </ListGroupItem>
        </ListGroup>
      </Card>
    </div>
  );
};

export default Hotel;
