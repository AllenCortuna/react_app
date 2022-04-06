
import {useState,useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import { signin,signup } from '../../actions/auth';
import { AUTH } from '../../constant';
import { Form,Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import FileBase from 'react-file-base64';
import logout from '../img/logout.png';
const SignUp = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('profile')));
  }, [user]);

    const [form,setForm] = useState({
        hotelName: '',
        location: '',
        email: '',
        password: '',
        confirmPassword: '',
        image: ''
    }
    );
    const [isSignup,setIsSignup] = useState(false);

    const dispatch = useDispatch();

    const history = useNavigate();

    const clear = () => {
         setForm({
            hotelName: '',
            location: '',
            email: '',
            password: '',
            confirmPassword: '',
            image: ''

        });
    };

    const changeMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup);
    };

// HANDLE SUBMIT
    const handleSubmit = (e) => {
        e.preventDefault();
        if(isSignup) {
            dispatch(signup(form,history));
            console.log(form.location,form.image);
        }else{
            dispatch(signin(form,history));
        } 
    }
    //GOOGLE
        /*  const googleSuccess = async (res) => {
        const result = res?.profileObj;
        const token = res?.tokenId;
        try {
            dispatch({ type: AUTH, data : {result, token }});
            history('/roomManagement');//push
        } catch (error) {
            console.log(error);
}    
    }
    const googleError = () => alert('Google Sign In was unsuccessful. Try again later');
   */
    return <div className="container">
        {/*logout first before log in and signup*/}
        {user?.result ? 
        <div className="borderline">
            <img src={logout} alt="logout png"  className='block center'/>
            <h4 className="center">Log out pls..</h4> <hr/> <p className='center'>Log out first, before logging in or signing up.</p> <br/> <p className="quick center">Thank you</p>

        </div> :
        <div className="borderline">
        <h2 className="quick center">{isSignup ? 'Sign Up' : 'Sign in'}</h2>

    {isSignup &&
    <Form.Control type="text" 
    placeholder="Enter Hotel Name"
    required
    value={form.hotelName}
    onChange={(e) => 
            setForm({ ...form, hotelName: e.target.value })} />    
    }

    {isSignup &&
    <Form.Control type="text" 
    placeholder="Enter Address" 
    value = {form.location}
    onChange = {(e) => 
            setForm({ ...form, location: e.target.value })} />}

    <Form.Control type="email" 
    placeholder="email" 
    required
    value = {form.email}
    onChange={(e) => 
            setForm({ ...form, email: e.target.value })} />    

    <Form.Control type="password" 
    placeholder="Password"
    required
    value = {form.password}
    onChange={(e) => 
            setForm({ ...form, password: e.target.value })} />    
    

    {isSignup &&
    <Form.Control type="password" 
    placeholder="Confirm Password" 
    value = {form.confirmPassword}
    onChange = {(e) => 
            setForm({ ...form, confirmPassword: e.target.value })} />}


    {isSignup &&
            <div className='quick'><p> &nbsp;Location Image</p>
            <FileBase type="file" multiple={false} onDone={({ base64 }) => setForm({ ...form, image: base64 })} />  </div>
    }

    <Button  style={{backgroundColor: '#41323b',margin:'1%'}}
    variant='dark'
    type="submit" 
    onClick={handleSubmit}>
    <p className="quick inline">
        {isSignup ? 'Sign Up' : 'Sign In'}
    </p>
    </Button>
  

    {/*    <GoogleLogin
    clientId="228143511095-5grssm02791fvrtbrvh67pl7kr2ntgob.apps.googleusercontent.com"
    render={(renderProps) => (
    <Button  style={{backgroundColor: '#41323b', margin:'1%'}}
    onClick={renderProps.onClick}>
    <p className="quick inline">
    Google 
    </p>
    </Button>)}
            onSuccess={googleSuccess}
            onFailure={googleError}
            cookiePolicy="single_host_origin"/>
            */}
    <hr/>
    
    <Button variant="none" 
    type="submit" 
    onClick={changeMode}>
    {isSignup ? 
        'Already have an account? sign in' : 'Dont have an account? sign up'}</Button> 

        </div>
        }
    </div>
}

export default SignUp;
