


//import React, { useState, useEffect } from 'react';
//import { useDispatch } from 'react-redux';
import './index.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Header  from './component/Header';
import Footer  from './component/Footer';
import About from './component/About';
import NotFound from './component/NotFound';
import Location from './component/Location'
import RoomManagement from './component/Room/RoomManagement'
import Home  from './component/Home';

const App  = () => {

    return <Router>
    <div>
            <Header />
    <Routes>

            <Route path='/'
            element={<Home/>}/> 
           
            <Route path='/RoomManagement'
            element={<RoomManagement/>} />

            <Route path='/location'
            element={<Location/>} />

            <Route path='/about'
             element={<About />} />

            <Route path='/*'
            element={<NotFound />} />

    </Routes>
             <Footer />
    </div>

</Router>
};

export  default App;


