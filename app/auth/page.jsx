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
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    signUp(username, password);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
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
      </form>
    </div>
  );
};

export default Auth;
