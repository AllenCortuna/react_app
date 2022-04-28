import moment from "moment";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Slider from "react-slick";

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
                  className='imgRoom'
                  src={item}
                  alt=""
                  key={item}
                  // style={{ width: "100%", height: "auto", objectFit: "cover" }}
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

    </div>
  );
};

export default Room;
