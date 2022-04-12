const Room = ({room}) => {
    return <div className='grid'>
        <img src={room.image} alt="" className="imgLogo inline"/> 
        <div className="div">
            <p className="font quick">{room.name}</p>
            <p className="font quick">{room.roomStatus}</p>
        </div>
        </div>
}
export default Room;
