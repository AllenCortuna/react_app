import { Link } from 'react-router-dom';
const Footer = () => {
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
    return <footer className='footer'>
        <p className='center quick '>Room Hunt Mamburao</p>
        <div className="grid">            
        <div>
        <hr/>
        <ul>
            <li><Link to='/term&condition' onClick={topFunction}> Term & Conditions</Link></li>
            <li><Link to='/contact' onClick={topFunction}> Contact Us</Link></li>
            <li><Link to='/questions' onClick={topFunction}>FAQs</Link></li>
        </ul>
        <hr/>
        </div>

        <div>
        <hr/>
        <ul>
            <li><Link to='/about' onClick={topFunction}>  About</Link></li>
            <li><Link to='/register' onClick={topFunction}>Register</Link></li>
            <li><Link to='/*' onClick={topFunction}>Report Issue</Link></li>
          </ul>
        <hr/>
        </div>

        </div>
        <p className='center font'> Hotel and resort online app 2021-2022</p>

        </footer>

};

export default Footer

