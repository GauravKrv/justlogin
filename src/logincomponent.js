import { useState } from "react";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged, //function triggered eerytime there is change in authstate
} from "firebase/auth";
import { auth } from "./firebase-config";
import "./index.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  }); //grabbing the user directly from this callback function

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        //calling above funciton to signin and just same as createuser thing just using different state
        auth,
        loginEmail,
        loginPassword
      );
      setIsUserLoggedIn(true);

      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="logdiv">
      <input
        type="email"
        className="iplog"
        placeholder="Email..."
        onChange={(event) => {
          setLoginEmail(event.target.value);
        }}
      ></input>
      <input
        type="password"
        className="iplog"
        placeholder="Password..."
        onChange={(event) => {
          setLoginPassword(event.target.value);
        }}
      ></input>
      <button className="bulogin" onClick={login}>
        <span>LOGIN{isUserLoggedIn && <Link to="/home">LOGIN</Link>} </span>
      </button>
    </div>
  );
};

export default Login;
