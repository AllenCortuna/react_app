

import  topFunction  from './function/function';
import { Link } from 'react-router-dom';
const About = () =>{

      return <div className="container">
        <div className="borderline">
            <h5 className="quick">
                About us
            </h5>
            <hr/>
            <p>
                This Progressive Web Application is develop by Student of Occidental Mindoro State University as part of Capstone Project to help hotel and dormitory, by informing that thier business is available and accepting tenants and customers. The main feature of this web application is to show the number of room in a hotel or dormitory and its status(available or unavailble) if its occupied or not. This will help customers and tenant in a way of reducing the hassle of finding the room that fits thier needs. We also include the price for each room for you to choose depending on your budget and needs.  The location of the Hotel/Dorm are provided and also the contacts that are needed for you to do your booking and accomodation. We decided to emplement this idea because of the need of this kind of services and also help the both hospitality industry  and the community. 
<br/>

            </p>
          <Link to='/' className='link' onClick={topFunction}>Back</Link>
        </div>
        </div>
}

export default About

