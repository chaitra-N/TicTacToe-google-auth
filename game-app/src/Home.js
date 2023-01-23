import React from "react";
import { AuthContextProvider } from "./context/AuthContext";
import Game from "./Game";
import SignInUp from "./SignInUp";

const Home = () => {
  return (
    <div className='welcomeGame'>
      <AuthContextProvider>
        <SignInUp />
      </AuthContextProvider>
    </div>
  );
};

export default Home;
