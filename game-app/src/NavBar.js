import React from "react";
import { UserAuth } from "./context/AuthContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log("oh no");
    }
  };

  return (
    <div className='nav nav-header'>
      <h1>Let's Play!</h1>

      {user?.displayName ? (
        <button className='nav-btn--out' onClick={handleSignOut}>
          Sign out
        </button>
      ) : (
        <Link to='./SignInUp' className='nav-btn--in'>
          Sign In
        </Link>
      )}
    </div>
  );
};

export default NavBar;
