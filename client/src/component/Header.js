import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import * as actionType from '../constant';
import {Nav,Navbar} from 'react-bootstrap'
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

          <Link to='/' className=''>Home</Link>

   {user?.result && 
          <Link to='/roomManagement' className=''>Room Management</Link>}

          <Link to='/availableRooms' className=''>Available Rooms</Link>

          <Link to='/FAQs' className=''>FAQs</Link>

   {user?.result ? (
        <Link to='/' className='' onClick={logout}>Logout</Link>
    ) : (
        <Link to="/register" className=''>Log In</Link>
    )}
      </Nav>
    </Navbar.Collapse>
</Navbar>



</div>

}

export default Header

