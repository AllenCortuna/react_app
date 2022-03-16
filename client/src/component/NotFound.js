import { Link } from 'react-router-dom';
const Notfound = () => {
    return <div className='container'>
        <div className='borderline'>
            <h1> <b>404</b></h1><br/>
            <h2 className='quick'>Page Not Found</h2>
            <p>The page you were looking for could not be found. It might have been remove, renamed or did not exist in the first place.</p>
            <br/>
        <Link to='/' className='link'>Back</Link>
        </div>  
    </div>  
        
};

export default Notfound;

