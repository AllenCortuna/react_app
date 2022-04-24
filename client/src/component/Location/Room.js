


import RoomDetails from './RoomDetails';
const Room = ({room}) =>{
  return <div className="borderline">
      {room.name}
      <RoomDetails image={room.image}/> 
    </div>
  
}

export default Room

