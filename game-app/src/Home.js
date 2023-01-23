import React from "react";
import { AuthContextProvider } from "./context/AuthContext";
import Game from "./GameComponents/Game";
import SignInUp from "./SignInUp";
import NavBar from "./NavBar.js";
import { Route, Routes } from "react-router-dom";

const Home = () => {
  return (
    <div className='welcomeGame'>
      <AuthContextProvider>
        <NavBar />
        <Routes>
          <Route path='/SignInUp' element={<SignInUp />} />
          <Route path='/Game' element={<Game />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
};

export default Home;
