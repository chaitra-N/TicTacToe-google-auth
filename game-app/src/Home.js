import React from "react";
import Game from "./Game";
import SignInUp from "./SignInUp";

const Home = () => {
  return (
    <div className='welcomeGame'>
      <h1>Tic Tac Toe Game</h1>
      <h2>Sign in/up to play</h2>
      <SignInUp />
    </div>
  );
};

export default Hone;
