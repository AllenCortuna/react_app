import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './index.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Header  from './component/Header';
import Footer  from './component/Footer';

import About from './component/About';
import NotFound from './component/NotFound';
import Location from './component/Location'
import Rooms from './component/Rooms';

import { getRooms } from './actions/rooms';

const App  = () => {

    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
    dispatch(getRooms());
  }, [currentId, dispatch]);



    return <Router>
        <div>
            <Header />
    <Routes>

           <Route path='/'
            element={<Rooms setCurrentId={setCurrentId}/>} /> 
           
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


