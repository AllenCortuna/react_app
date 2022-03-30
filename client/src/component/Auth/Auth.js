
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import { signin,signup } from '../../actions/auth';
import { AUTH } from '../../constant';
import { Form,Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

const SignUp = () => {

    const [form,setForm] = useState({
        hotelName: '',
        email: '',
        password: '',
        confirmPassword: ''
    }
    );
    const [isSignup,setIsSignup] = useState(false);

    const dispatch = useDispatch();
    const history = useNavigate();

    const clear = () => {
         setForm({
            hotelName: '',
            email: '',
            password: '',
            confirmPassword: ''
        });
    };

    const changeMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup);
    };
//GOOGLE
    const googleSuccess = async (res) => {
        const result = res.profileObj;
        const token = res.tokeId;
        try {
            dispatch({ type: AUTH, data : {result, token }});
            history('/');//push
        } catch (error) {
            console.log(error);
}
    }
    const googleError = () => alert('Google Sign In was unsuccessful. Try again later');

// HANDLE SUBMIT
    const handleSubmit = (e) => {
        e.preventDefault();
        if(isSignup) {
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
    value={form.hotelName}
    onChange={(e) => 
            setForm({ ...form, hotelName: e.target.value })} />    
    }

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

    <Button variant="primary" 
    type="submit" 
    onClick={handleSubmit}>
    {isSignup ? 'Sign Up' : 'Sign In'}
    </Button>

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
            cookiePolicy="single_host_origin"/>

    <hr/>
    
    <Button variant="none" 
    type="submit" 
    onClick={changeMode}>
    {isSignup ? 'Already have an account? sign in' : 'Dont have an account? sign up'}</Button> 

        </div>

    </div>
}

export default SignUp;