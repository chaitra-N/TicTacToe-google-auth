import React from "react";
import { signInWithGoogle } from "./Firebase";
import GoogleButton from "react-google-button";

const SignInUp = () => {
  return (
    <div className='signUp'>
      <button className='signUp button' onClick={signInWithGoogle}>
        <GoogleButton />
      </button>
    </div>
  );
};

export default SignInUp;
