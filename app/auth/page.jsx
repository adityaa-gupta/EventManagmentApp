"use client";

import useAuth from "@hooks/useAuth";
import useAuthStore from "@store/useAuthStore";
import React, { useState } from "react";

const Auth = () => {
  const { signUp, signIn } = useAuth("/events");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLogedIn, setISLogedIn] = useState(false);
  // const user = useAuthStore((state) => state.user);

  const handleSignIn = (e) => {
    e.preventDefault();
    signIn(username, password);
    setUsername("");
    setPassword("");
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    signUp(username, password);
    setUsername("");
    setPassword("");
  };

  return (
    <div className="  ">
      <div className="bg-white mb-5 py-3 text-center text-3xl font-bold text-blue-500 ">
        <h1>{isLogedIn ? "Sign In" : "Sign Up"}</h1>
      </div>
      <div className="flex justify-center items-center ">
        <div className="   px-3 pt-6 pb-8 m-4">
          <div className="mb-4 p-3 bg-white rounded-md">
            <label
              className="text-blue-600   font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className=" appearance-none  w-full py-1 px-1 text-gray-700 leading-tight outline-none "
              id="username"
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4 p-3 bg-white rounded-md">
            <label
              className="text-blue-600   font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="appearance-none  w-full py-1 px-1 text-gray-700 leading-tight outline-none"
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between flex-col gap-4">
            {/* <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleSignIn}
            >
            Sign In
          </button> */}
            {isLogedIn ? (
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                onClick={handleSignIn}
              >
                Sign In
              </button>
            ) : (
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                onClick={handleSignUp}
              >
                Sign Up
              </button>
            )}
            <button
              type="button"
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 cursor-pointer"
              onClick={() => setISLogedIn((val) => !val)}
            >
              {!isLogedIn
                ? "  Already have an account ? SignIn"
                : "Create your new account"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
