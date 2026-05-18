"use client";
import { useState } from "react";
import RestaurantLogin from "../_components/RestaurantLogin";
import RestaurantSignUp from "../_components/RestaurantSignup";
import RestaurantHeader from "../_components/RestaurantHeader";
import style from './style.css'
import RestaurantFooter from "../_components/RestaurantFooter";
const Restaurant = () => {
  const [login, setLogin] = useState(true);

  return (
    <>
      <div className="container">
        <RestaurantHeader/>
        <h1>Restaurant Login / Signup page</h1>
        {login ? <RestaurantLogin /> : <RestaurantSignUp />}

        <button className="button-link" onClick={() => setLogin(!login)}>
          {login ? "Already have Account? Login" : "Do not have account? SignUp"}
        </button>
      </div>
      <RestaurantFooter/>
    </>
  );
};

export default Restaurant;
