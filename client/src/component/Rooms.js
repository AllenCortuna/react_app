import Room from './Room'
import CreateRoom from './CreateRoom'
import { useSelector } from 'react-redux';
const Rooms = ({setCurrentId}) => {

const rooms = useSelector((state) => state.rooms);
console.log(rooms)

    return <div className="container">        
        { !rooms.length ? <p>Loading ...</p> : 
        <table>
            {rooms.map((room)=>(
                <div key ={room.id}>
                    <Room room={room}
                    setCurrentId={setCurrentId}/>
            
                </div >
            ))}
        </table>}

        <CreateRoom/>
        </div>
}

export default Rooms
