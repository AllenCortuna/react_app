import Room from './Room'
import { useSelector } from 'react-redux';

const Rooms = ({setCurrentId}) => {

    const rooms = useSelector((state) => state.rooms);
    return (       
         !rooms.length ? <p>Loading ...</p> : 
        (
            <div className="container">
            {rooms.map((room)=>(
                <div key ={room._id}>
                    <Room room={room}
                     setCurrentId={setCurrentId}/>
                </div >
            ))}
            </div>

        )
    ); 
};
