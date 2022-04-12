


import {ListGroup,ListGroupItem}from 'react-bootstrap';

const Room = ({room}) => {
    return <div className='borderline gridRoom'> 


        <img src={room.image} alt=""  
        className='imgRoom inline'
        style={{marginRigth:'4px'}}/>        
        <div>

 <ListGroup className="list-group">

    <ListGroupItem className='quick font'>{room.name}</ListGroupItem>

 <ListGroupItem className='quick font'>Php {room.price}</ListGroupItem>


 <ListGroupItem className='quick font'>{room.category}</ListGroupItem>

    <ListGroupItem className='quick font'>   {room.roomStatus ? <p className="quick green inline">Available</p> : <p className="grey inline">Unvailable</p> } </ListGroupItem>
  </ListGroup>
        
        </div>
        </div>
}
export default Room;
