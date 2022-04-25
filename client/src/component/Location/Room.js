


import RoomDetails from './RoomDetails';
import moment from 'moment';

const Room = ({room}) =>{
  return <div className='borderline' style={{backgroundColor:''}}>


    <div style={{backgroundColor:'#41323b', borderRadius:'5px 5px 0 0'}}>

      <RoomDetails image={room.image}/> 
    </div>

    <table>
        <thead>
        <tr>
            <th className="quick">Room No/Name:</th>
            <th style={{fontSize: '14px'}} 
                className='quick'>{room.name}</th>
        </tr>
        </thead>
    <tbody>
        <tr>
            <td className='quick'>Price</td>
            <td><p className="quick inline">Php</p> {room.price}</td>
        </tr>
        <tr>
            <td className='quick'>Category</td>
            <td>{room.category}</td>
        </tr>
        <tr>
            <td className='quick'>Status</td>
            {room.roomStatus ? <td className="quick green">Available</td> : <td className="grey">Unvailable</td> }
        </tr>
        <tr>
            <td className='quick'>Last Update</td>
            <td>{moment(room.updatedAt).fromNow()}</td>
        </tr>
    </tbody>
    </table>

    </div>
  
}

export default Room

