import { Nav,Navbar} from 'react-bootstrap';

import { Link } from 'react-router-dom';
const Header = () => {
    return <div className='header' >
        <Navbar 
        collapseOnSelect
        bg="dark" 
        variant="dark" 
        expand="false" 
        bsPrefix='navbar'>
        <Navbar.Brand className='quick'>Room Hunt 
<p className="font quick" style={{display:'inline', marginLeft:'5%'}}>Mamburao</p>

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

