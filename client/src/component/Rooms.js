import Room from './Room'
//import CreateRoom from './CreateRoom'
import { useSelector } from 'react-redux';

const Rooms = ({setCurrentId}) => {

const rooms = useSelector((state) => state.rooms);
    return <div className="container">        

        { !rooms.length ? <p>Loading ...</p> : 
        <>
            {rooms.map((room)=>(
                <div key ={room._id}>
                    <Room room={room}
                    setCurrentId={setCurrentId}/>
                </div >
            ))}
        </>}

        </div>
}

export default Rooms
