import { Link,useLocation, useNavigate } from 'react-router-dom';
import React, { useState,useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as actionType from '../constant';

const Footer = () => {

    const dispatch = useDispatch();
    const history = useNavigate();

    const location = useLocation();
    useEffect(() => {
        const token = user?.token;
        setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

 const logout = () => {
        dispatch({ type: actionType.LOGOUT });

        history('/register');

        setUser(null);
    };
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

return <footer className='footer background'>
        {user?.result ? ( 
        <Link to = '/roomManagement' className="poppin center">
            <h3 className="poppin center">{user?.result.hotelName}</h3>  </Link>
    ) : (  
        <Link to ='/' className="poppin center">
            <h3 className="poppin center">Room Hunt </h3></Link>    )} 

        {user?.result ? (
        <Link to='/' className='hlink center quick' onClick={logout}>Logout</Link>
    ) : (
        <Link to="/register" className='hlink center quick'>Log In</Link>
    )}
 <hr/>
        <div className="grid">            
        <div> 
        <ul>
            <li><Link to='/term&condition' onClick={topFunction}> Term &Conditions</Link></li>
            <li><Link to='/contact' onClick={topFunction}> Contact Us</Link></li>
            <li><Link to='/questions' onClick={topFunction}>FAQs</Link></li>
        </ul>
        </div>

        <div> 
        <ul>
            <li><Link to='/about' onClick={topFunction}>  About</Link></li>
            <li><Link to='/register' onClick={topFunction}>Register</Link></li>
            <li><Link to='/*' onClick={topFunction}>Report Issue</Link></li>
          </ul>
        </div>

        </div>
        <p className='center font quick grey'>Room Hunt Mamburao 2021-2022</p>

        </footer>

};

export default Footer

