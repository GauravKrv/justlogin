import "./index.css";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";
import { Link } from "react-router-dom";
import { useState } from "react";

const Home = () => {
  const [isUserLoggedOut, setIsUserLoggedOut] = useState(false);

  const logout = async () => {
    await signOut(auth); //signing out
    setIsUserLoggedOut(true);
  };
  return (
    <div className="homediv">
      <h1>Welcome</h1>
      <button className="bulogin" onClick={logout}>
        <span>Logout{isUserLoggedOut && <Link to="/">Logout</Link>}</span>
      </button>
    </div>
  );
};

export default Home;
