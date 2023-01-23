import React from "react";
import { UserAuth } from "./context/AuthContext";

import { GoogleButton } from "react-google-button";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const SignInUp = () => {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log("Error");
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate("/Game");
    }
  }, [user]);

  return (
    <div>
      <h1 className='title'>SignIn to Start Playing!!</h1>
      <div className='signUp'>
        <GoogleButton onClick={handleGoogleSignIn} />
      </div>
    </div>
  );
};

export default SignInUp;
