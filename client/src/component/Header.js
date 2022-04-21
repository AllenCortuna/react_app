import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import * as actionType from '../constant';
import {Nav,Navbar} from 'react-bootstrap'

import dorm from './img/dorm.png';
import home from './img/home.png';
import login from './img/login.png';
import manage from './img/document.png';
import terms from './img/terms-and-conditions.png';
import mail from './img/mail.png';
//<a href="https://www.flaticon.com/free-icons/register" title="register icons">Register icons created by Nhor Phai - Flaticon</a>
//<a href="https://www.flaticon.com/free-icons/register" title="register icons">Register icons created by Linector - Flaticon</a>
//<a href="https://www.flaticon.com/free-icons/faq" title="faq icons">Faq icons created by Freepik - Flaticon</a>
//terms
//<a href="https://www.flaticon.com/free-icons/terms-and-conditions" title="terms and conditions icons">Terms and conditions icons created by monkik - Flaticon</a>
const Header = () => {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useNavigate();

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });
    history('/register');

    setUser(null);
    };


    useEffect(() => {
    const token = user?.token;
    if (token) {
      const decodedToken = decode(token);
    if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }
    setUser(JSON.parse(localStorage.getItem('profile'))); // eslint-disable-next-line
  }, [location]);

  return <div className='header background' >
    <Navbar 
      collapseOnSelect
      bg="none" 
      variant="dark" 
      expand="false" 
      bsPrefix='navbar'>
      <Navbar.Brand> 
        
        <Link to = '/'>
          <p className="poppin inline ">Room Hunt </p></Link>   
     
    </Navbar.Brand>
    <div className='item'>
      {user?.result &&
      <img src={user?.result.image} alt="" className='imgheader' />
      }
      <Navbar.Toggle aria-controls="basic-navbar-nav" style={{marginLeft:'4%'}}/>
    </div>



    <Navbar.Collapse id="basic-navbar-nav">
      <br/>
      <Nav className="me-auto">

      <Link to='/' className=''>
        <img src={home} alt="" className='imglogo'/>
          Home</Link>

    {user?.result && 
      <Link to='/roomManagement' className=''>
        <img src={dorm} alt="" className='imglogo'/>
          Make a Room</Link>}


      <Link to='/updateRooms' className=''>
        <img src={manage} alt="" className='imglogo'/>Update Rooms</Link>
        
      <Link to='/contact' className=''>
        <img src={mail} alt="" className='imglogo'/>
          Contact us</Link>

      <Link to='/terms' className=''>
        <img src={terms} alt="" className='imglogo'/>
            Terms &amp; Conditions</Link>

          {user?.result ?
      (<Link to='/' className='' onClick={logout}>
        <img src={login} alt="" className='imglogo'/>
        Logout</Link>) : 
      (<Link to="/register" className=''>
        <img src={login} alt="" className='imglogo'/> Log In  </Link> )}

    </Nav>
  </Navbar.Collapse>
</Navbar>



</div>

}

export default Header

