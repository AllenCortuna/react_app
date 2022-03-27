
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import { signin,signup } from '../../actions/auth';
import { AUTH } from '../../constant';
import { Form,Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';


const initialState = {
    hotelName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUp = () => {

    const [form,setForm] = useState(initialState);
    const [isSignup,setIsSignup] = useState(false);

    const dispatch = useDispatch();
    const history = useNavigate();

    const changeMode = () => {
        setForm(initialState);
        setIsSignup((prevIsSignup) => !prevIsSignup);
    }

    const googleSuccess = async (res) => {
        const result = res.profileObj;
        const token = res.tokeId;

        try {
            dispatch({ type: AUTH, data : {result, token }});
            history.push('/');
        } catch (error) {
            console.log(error);
        }
    }

    const googleError = () => alert('Google Sign In was unsuccessful. Try again later');

    const handleChange = (e) => setForm({
        ...form, [e.target.hotelName]: e.target.value 
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if(isSignup) {
            console.log('form hotelName',form.hotelName);
            dispatch(signup(form,history));
        }else{
            dispatch(signin(form,history));
        } 
    }

    return <div className="container">
        <div className="borderline">
        <h2 className="quick">{isSignup ? 'Sign Up' : 'Sign in'}</h2>

    {isSignup &&
    <Form.Control type="text" 
    placeholder="Enter Hotel Name"
    required
    name='hotelName'
    handleChange={handleChange} />    
    }

    <Form.Control type="email" 
    placeholder="email" 
    required
    name='email'
    handleChange={handleChange} />    


    <Form.Control type="password" 
    placeholder="Password" 
    required
    name='password'
    handleChange={handleChange} />   

    {isSignup &&
    <Form.Control type="password" 
    placeholder="Confirm Password" 
    name='confirmPassword'
    handleChange={handleChange} />    
    }
    <Button variant="primary" 
    type="submit" 
    onClick={handleSubmit}>
    {isSignup ? 'Sign Up' : 'Sign In'}
    </Button>
<p>   </p>
    <GoogleLogin
    clientId="228143511095-5grssm02791fvrtbrvh67pl7kr2ntgob.apps.googleusercontent.com"
    render={(renderProps) => (
        <Button  color="primary"
        onClick={renderProps.onClick}>
        
    Google Sign In
    </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleError}
            cookiePolicy="single_host_origin"
          />

    <hr/>

    
    <Button variant="none" 
    type="submit" 
    onClick={changeMode}>
    {isSignup ? 'Already have an account? sign in' : 'Dont have an account? sign up'}
    </Button> 

        </div>

        </div>
}

export default SignUp;
