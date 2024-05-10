import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div className="home min-h-screen flex p-4">
      <div className="image-container w-1/2 flex justify-center items-center ">
        <img src="/getStarted.svg" alt="Get Started" />
      </div>
      <div className="content-container w-1/2 flex flex-col justify-center items-center px-12 pb-12">
        <h1 className="text-6xl font-bold text-white mb-8">
          Welcome to Event Management App
        </h1>
        <p className="text-white text-lg text-center mb-8">
          Manage your events with ease. Create, update, and delete events in
          real-time.
        </p>
        <Link
          className="bg-white hover:bg-gray-200 text-blue-500 font-medium py-2 px-4 rounded-md shadow-md hover:shadow-lg"
          href="/auth"
        >
          Verify Your Self
        </Link>
      </div>
    </div>
  );
};

export default Home;
