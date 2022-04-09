import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import * as actionType from '../constant';
import {Nav,Navbar} from 'react-bootstrap'

import home from './img/home.png';
import login from './img/login.png';
import register  from './img/register.png';
import qa from './img/qa.png';
import manage from './img/document.png';

//<a href="https://www.flaticon.com/free-icons/login" title="login icons">Login icons created by Freepik - Flaticon</a>
//<a href="https://www.flaticon.com/free-icons/register" title="register icons">Register icons created by Nhor Phai - Flaticon</a>
//<a href="https://www.flaticon.com/free-icons/register" title="register icons">Register icons created by Linector - Flaticon</a>
//<a href="https://www.flaticon.com/free-icons/faq" title="faq icons">Faq icons created by Freepik - Flaticon</a>
//<a href="https://www.flaticon.com/free-icons/home-button" title="home button icons">Home button icons created by Freepik - Flaticon</a>
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
    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

    return <div className='header background' >
        <Navbar 
        collapseOnSelect
        bg="none" 
        variant="dark" 
        expand="false" 
        bsPrefix='navbar'>
        <Navbar.Brand> 
{/* BRAND NAME*/}
        <Link to = '/'>
            <p className="poppin inline ">Room Hunt </p></Link>   
    
    </Navbar.Brand>
    <div className='item'>

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
            <img src={manage} alt="" className='imglogo'/>
            Room Management</Link>}

        <Link to='/availableRooms' className=''>
            <img src={register} alt="" className='imglogo'/>
                Available Rooms</Link>
        
        <Link to='/FAQs' className=''>
            <img src={qa} alt="" className='imglogo'/>   
              FAQs</Link>

   {user?.result ? (
       <Link to='/' className='' onClick={logout}>

            <img src={login} alt="" className='imglogo'/>
       Logout</Link>
    ) : (
        <Link to="/register" className=''>
            <img src={login} alt="" className='imglogo'/>
        Log In</Link>
    )}
      </Nav>
    </Navbar.Collapse>
</Navbar>



</div>

}

export default Header

