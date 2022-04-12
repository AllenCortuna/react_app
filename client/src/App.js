


import './index.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Header  from './component/Header';
import Footer  from './component/Footer';
import About from './component/About';
import NotFound from './component/NotFound';
import Location from './component/Location/Location'
import RoomManagement from './component/Room/RoomManagement'
import SignUp from './component/Auth/Auth'
import HotelDetails from './component/Location/HotelDetails'
const App  = () => {

    return <Router>
    <div>
            <Header />
    <Routes>

            <Route path='/'
            element={<Location/>}/> 
           
            <Route path='/RoomManagement'
            element={<RoomManagement/>} />

            <Route path='/about'
            element={<About />} />

            <Route path='/register'
            element={<SignUp />} />

            <Route path='/hotels/:id'
            element={<HotelDetails/>} />

            <Route path='/*'
            element={<NotFound />} />

    </Routes>
             <Footer />
    </div>

</Router>
};

export  default App;


