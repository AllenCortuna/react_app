
import { Link } from 'react-router-dom';
import {Card} from 'react-bootstrap'
import img from './img/location.jpg'
const Location = () => {
  const hotel = [{
      "id":1,
      "name": "Mindorenous",
      "location":"Brgy. 9 Mamburao Occ. Mindoro",
      "roomAvailable": 5,
      "updatedAt": "04-05-05"
  },
    {
      "id":3,
      "name": "Unit Dorm",
      "location": "Brgy. location no  three",
      "roomAvailable": 0,
      "updatedAt": "10-2-03"
    },
    {
      "id":2,
      "name": "Hotel Alpha",
      "location": "Brgy. location no 2",
      "roomAvailable": 15,
      "updatedAt": "05-15-22"
    },
    {
      "id":2,
      "name": "Hotel Alpha",
      "location": "Brgy. location no 2",
      "roomAvailable": 15,
      "updatedAt": "05-15-22"
    },
    {
      "id":2,
      "name": "Hotel Alpha",
      "location": "Brgy. location no 2",
      "roomAvailable": 0,
      "updatedAt": "05-15-22"
    },
    {
      "id":3,
      "name": "Dorm 2",
      "location": "Brgy. location no  three",
      "roomAvailable": 14,
      "updatedAt": "05-15-22"
    }];
return <div className="container">

        {/*LOOP THE HOTEL AND RESORT*/}
:        {hotel.map((a)=> (
 <Card style={{ width: '20rem',margin: '1%' }} border='dark' bg='grey'>
    <Card.Img variant="top" src={img} />

  <Card.Body>
      <Card.Title><p className='quick'>{a.name}</p>
        <p className='font'>{a.location}</p>
    <hr/>
            </Card.Title>
    <Card.Text>
    
    {/* ROOM AVAILABLE */}
    <p className='quick'>Room Available : &nbsp; 
    {a.roomAvailable ? 
            <p style={{display:'inline'}} className='green quick'>
            {a.roomAvailable}</p> :
            <p className='red font' style={{display:'inline'}}>
            No Room Available</p>
    }</p>
<p className='quick font'>Updated At: &nbsp;{a.updatedAt}</p>
    </Card.Text>

        <Link to='/' className='link'>More info</Link>

  </Card.Body>
</Card>
        ))}



        </div>

}

export default Location
