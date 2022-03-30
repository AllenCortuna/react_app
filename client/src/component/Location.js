
import { Link } from 'react-router-dom';
import {Card} from 'react-bootstrap'
import img from './img/location.jpg'
const Location = () => {
  const hotel = [{
      "id":1,
      "name": "Mindorenous",
      "location":"Brgy. 9 Mamburao Occ. Mindoro",
  },
    {
      "id":3,
      "name": "Unit Dorm",
      "location": "Brgy. location no  three",
    },
    {
      "id":2,
      "name": "Hotel Alpha",
      "location": "Brgy. location no 2",
    },
    {
      "id":2,
      "name": "Hotel Alpha",
      "location": "Brgy. location no 2",
    },
    {
      "id":2,
      "name": "Hotel Alpha",
      "location": "Brgy. location no 2",
    },
    {
      "id":3,
      "name": "Dorm 2",
      "location": "Brgy. location no  three",
    }];
return <div className="container">

        {/*LOOP THE HOTEL AND RESORT*/}
        {hotel.map((a)=> (
 <Card style={{ width: '20rem',margin: '1%' }} border='dark' bg='grey'>
    <Card.Img variant="top" src={img} />

  <Card.Body>
      <Card.Title><p className='quick'>{a.name}</p>
        <p className='font grey'>{a.location}</p>
    <hr/>
            </Card.Title>


    <Card.Text>
    </Card.Text>

        <Link to='/' className='link'>More info</Link>

  </Card.Body>
</Card>
        ))}



        </div>

}

export default Location
