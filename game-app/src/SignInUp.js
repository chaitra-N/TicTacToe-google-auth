import React from "react";
import { UserAuth } from "./context/AuthContext";

import { GoogleButton } from "react-google-button";

const SignInUp = () => {
  const { googleSignIn } = UserAuth();
  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log("Error");
    }
  };
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
