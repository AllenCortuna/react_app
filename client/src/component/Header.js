import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import * as actionType from '../constant';
import {Nav,Navbar,Button} from 'react-bootstrap'
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

    return <div className='header' >
        <Navbar 
        collapseOnSelect
        bg="dark" 
        variant="dark" 
        expand="false" 
        bsPrefix='navbar'>
        <Navbar.Brand> 

    {user?.result ? (
        <div className='inline'>
            <p className="quick inline">{user?.result.name}</p>
            <Button onClick={logout} 
            variant='dark'
            ><p className="hlink">Logout</p></Button>
            </div>
    ) : (
        <div className='inline'>
            <p className="quick inline">Room Hunt</p>
            <Link to="/register" className='hlink'>Sign In</Link>
        </div>
    )}

    </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      
    <Navbar.Collapse id="basic-navbar-nav">
        <br/>
      <Nav className="me-auto">
          <Link to='/'>Home</Link>
          <Link to='/roomManagement'>Room Management</Link>
          <Link to='/availableRooms'>Available Rooms</Link>
          <Link to='/register'>Register</Link>
      </Nav>
    </Navbar.Collapse>
</Navbar>



</div>

}

export default Header

