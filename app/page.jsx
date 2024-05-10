import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div className=" flex-col flex p-4 gap-5 text-center">
      <h1 className="text-4xl font-bold text-yellow-400 ">
        Welcome to Event Management App
      </h1>
      <div className="  flex flex-col justify-center items-center gap-1 ">
        <img src="calender.svg" alt="" className="mb-5" />
        <h1 className="text-2xl font-bold">Fixe a Date Event</h1>
        <p className="text-black-500 text-xl text-center mb-8">
          Manage your events with ease. Create, update, and delete events in
          real-time.
        </p>
        <Link
          className="bg-white hover:bg-gray-200 text-blue-500 font-medium py-2 px-4 rounded-md shadow-md hover:shadow-lg"
          href="/auth"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Home;
