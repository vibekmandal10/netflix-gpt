import React, { useState } from "react";
import { background_image, logo } from "../utils/constant";
import Header from "./Header";
const Login = () => {
  const [showSignUp, setShowSignUp] = useState(false);
  return (
    <div>
      <Header />
      {showSignUp ? (
        <form className="w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
          <h1 className="text-4xl my-2 font-bold">Sign Up</h1>
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
          <input
            type="text"
            placeholder="Email Address"
            className="p-4 my-4 w-full bg-gray-700"
          />
          
          <input
            type="password"
            placeholder="Password"
            className="p-4 my-4 w-full bg-gray-700"
          />
          <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
            Sign Up
          </button>
          <p
            className="cursor-pointer"
            onClick={() => {
              setShowSignUp(false);
            }}
          >
            Already in Netflix? Sign In Now
          </p>
        </form>
      ) : (
        <form className="w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
          <h1 className="text-4xl my-2 font-bold">Sign In</h1>
          <input
            type="text"
            placeholder="Email Address"
            className="p-4 my-4 w-full bg-gray-700"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-4 my-4 w-full bg-gray-700"
          />
          <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
            Sign In
          </button>
          <p
            className="cursor-pointer"
            onClick={() => {
              setShowSignUp(true);
            }}
          >
            New to Netflix? Sign Up Now
          </p>
        </form>
      )}
    </div>
  );
};

export default Login;
