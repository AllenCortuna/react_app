import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signin, signup } from "../../actions/auth";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import FileBase from "react-file-base64";

const SignUp = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [user]);

  const [form, setForm] = useState({
    hotelName: "",
    location: "",
    email: "",
    password: "",
    confirmPassword: "",
    contact: "",
    image: "",
  });
  const [isSignup, setIsSignup] = useState(false);

  const dispatch = useDispatch();

  const history = useNavigate();

  const clear = () => {
    setForm({
      hotelName: "",
      location: "",
      email: "",
      password: "",
      confirmPassword: "",
      contact: "",
      image: "",
    });
  };

  const changeMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
    clear();
  };

  // HANDLE SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      if(form.hotelName==="" || form.location==="" || form.email==="" || form.contact==="" || form.image===""){
        alert("Complete All information. Image is required 😀")
      }else if(form.password !== form.confirmPassword ){
        alert("Password did not match")
      }else{
        dispatch(signup(form, history));
      }
    } else {
      dispatch(signin(form, history));
    }
  };

  return (
    <div className="container">
      {/*logout first before log in and signup*/}
      {user?.result ? (
        <div className="borderline">
          <h4 className="center">Log out pls..</h4> <hr />{" "}
          <p className="center">
            Log out first, before logging in or signing up.
          </p>
          <br /> <p className="quick center">Thank you</p>
        </div>
      ) : (
        <div className="borderline">
          <h2 className="quick center">{isSignup ? "Sign Up" : "Sign in"}</h2>

          {isSignup && (
            <Form.Control
              type="text"
              placeholder="Enter Hotel Name"
              required
              value={form.hotelName}
              onChange={(e) => setForm({ ...form, hotelName: e.target.value })}
            />
          )}

          {isSignup && (
            <Form.Control
              type="text"
              placeholder="Enter Address"
              value={form.location}
              onChange={(e) => setForm({ ...form, location: e.target.value })}
            />
          )}

          <Form.Control
            type="email"
            placeholder="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <Form.Control
            type="password"
            placeholder="Password"
            required
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />

          {isSignup && (
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              value={form.confirmPassword}
              onChange={(e) =>
                setForm({ ...form, confirmPassword: e.target.value })
              }
            />
          )}

          {isSignup && (
            <Form.Control
              type="number"
              maxLength="11"
              required
              placeholder="Contact number"
              value={form.contact}
              onChange={(e) => setForm({ ...form, contact: e.target.value })}
            />
          )}

          {isSignup && (
            <div className="quick">
              <FileBase
                type="file"
                multiple={false}
                onDone={({ base64 }) => setForm({ ...form, image: base64 })}
              />
              <p> &nbsp;Location Image</p>
            </div>
          )}

          <Button
            style={{ backgroundColor: "#41323b", margin: "1%" }}
            variant="dark"
            type="submit"        
            onClick={handleSubmit}
          >
            <p className="quick inline">{isSignup ? "Sign Up" : "Sign In"}</p>
          </Button>

          <hr />

          <Button
            variant="dark"
            style={{ backgroundColor: "#41323b" }}
            type="submit"
            onClick={changeMode}
          >
            {isSignup
              ? "Already have an account? sign in"
              : "Dont have an account? sign up"}
          </Button>
        </div>
      )}
    </div>
  );
};

export default SignUp;
