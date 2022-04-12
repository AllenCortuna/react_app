
import {useNavigate} from 'react-router-dom';
import {Card,ListGroup,ListGroupItem}from 'react-bootstrap';
import { useSelector } from 'react-redux';

const Hotel  = ({user}) => {

    const rooms = useSelector((state) => state.rooms);
    const navigate = useNavigate();
    const openHotel = (e) => {navigate(`/hotels/${user._id}`); 
    }

    return <div key={user._id} onClick={openHotel}>
    <Card className='card' >
    <Card.Img variant="top" src={user.image} className='img'/>
  <Card.Body>
  <ListGroup className="list-group">
    <ListGroupItem className='quick'>{user.hotelName}</ListGroupItem>
    <ListGroupItem className='font quick'><p className='inline'>room available:</p> {rooms.filter(room => room?.creator === user?._id).length}</ListGroupItem>
    <ListGroupItem className='font' disabled>{user.location}</ListGroupItem>
  </ListGroup>
  </Card.Body>
</Card>
    </div>
}



export default Hotel

