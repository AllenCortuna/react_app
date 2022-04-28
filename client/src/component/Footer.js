import { Link,useLocation, useNavigate } from 'react-router-dom';
import React, { useState,useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as actionType from '../constant';
import topFunction from './function/function';
const Footer = () => {

  const dispatch = useDispatch();
  const history = useNavigate();

  const location = useLocation();
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('profile')));
}, [location]);

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });
    topFunction()
    history('/register');
    setUser(null);
  };

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

  return <footer className='footer background'>
    <Link to ='/' className="poppin center">
      <h3 className="poppin center">Room Hunt </h3></Link>  

 <hr/>
      <div className="grid">            
        <div> 
        <ul>
            <li><Link to='/terms' onClick={topFunction}> Term &amp; Conditions</Link></li>

          <li>
            <a href="mailto:allencortuna_caststudent@omsc.ph.education">Contact Us </a></li>
   
            <li>{user?.result ? (
            <Link to='/register' onClick={logout}>Logout</Link>
    ) : (
        <Link to="/register" onClick={topFunction}>Log In</Link>
    )}
        </li>
        </ul>
        </div>

        <div> 
        <ul>
            <li><Link to='/about' onClick={topFunction}>  About</Link></li>
            <li><Link to='/privacy' onClick={topFunction}>Privacy Policy</Link></li>
            <li>
              <a href="mailto:allencortuna_caststudent@omsc.ph.education">Report Issue </a></li>
          </ul>
        </div>

        </div>
        <p className='center font quick grey'>Room Hunt Mamburao 2021-2022</p>
        <p className="center font grey" style={{marginLeft:'2rem', marginRight: '2rem'}}>
            Room Hunt is  develop by Students of Occidental Mindoro State University as part of Capstone Project to help hotel and dormitory, by informing that their business is available and accepting tenants and customers. The main feature of this web application is to show the number of room in a hotel or dormitory and its status(available or unavailble) if its occupied or not. </p>
        </footer>

};

export default Footer

