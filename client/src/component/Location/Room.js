import moment from "moment";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Slider from "react-slick";
import { useDispatch } from "react-redux";
import { deleteRoom } from "../../actions/rooms";
import more from "../img/more.png";
import cancel from "../img/delete.png";
import { Button } from "react-bootstrap";

const Room = ({ room }) => {
  const category = room.category;
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotClass: "dotClass",
  };
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));
  const updateStatus = () => {

  }

  return (
    <div className="borderline" style={{ backgroundColor: "" }}>
      <div style={{ backgroundColor: "#41323b", borderRadius: "5px 5px 0 0" }}>
        <div style={{ padding: "10%" }}>
          <Slider {...settings}>
            {room.image.map((item) => (
              <div>
                <img
                  src={item}
                  alt=""
                  key={item}
                  style={{ width: "100%", height: "auto", objectFit: "cover" }}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>

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
      <br />
      <Stack direction="row" spacing={1}>
        {category.map((cat) => (
          <Chip label={cat} variant="outlined" className="quick" />
        ))}
      </Stack>

      {/*CONTROL BUTTON FOR ROOMS*/}
      <div className="grid">
        {(user?.result?.googleId === room?.creator ||
          user?.result?._id === room?.creator) && (
          <Button variant="none" onClick={updateStatus}>
            <img src={more} alt="" style={{ width: "35%" }} />
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
