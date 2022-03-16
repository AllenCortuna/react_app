import { Link } from 'react-router-dom';
const Footer = () => {
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
    return <footer className='footer'>
        <p className='center'>Room Hunt Mamburao</p>
        <div className="grid">            
        <div>
        <hr/>
        <ul>
            <li><Link to='/term' onClick={topFunction}> Term & Conditions</Link></li>
            <li><Link to='/contact' onClick={topFunction}> Contact Us</Link></li>
        </ul>
        <hr/>
        </div>

        <div>
        <hr/>
        <ul>
            <li><Link to='/about' onClick={topFunction}>  About</Link></li>
            <li><Link to='/*' onClick={topFunction}>Report Issue</Link></li>
          </ul>
        <hr/>
        </div>

        </div>
        <p className='center'> Hotel and resort online app 2021-2022</p>

        </footer>

};

export default Footer

