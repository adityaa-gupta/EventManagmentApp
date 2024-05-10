"use client";
import React from "react";
import { CiCalendarDate, CiTimer } from "react-icons/ci";
import DeleteButton from "./DeleteButton";

import useAuthStore from "@store/useAuthStore";
import { HiBookmark } from "react-icons/hi2";

const EventData = ({ data }) => {
  const { user } = useAuthStore();
  //   console.log(user.uid);
  const userId = user.uid;
  console.log(userId);
  return data.map((event) => (
    <div
      key={event.id}
      className="flex flex-col  rounded-lg shadow-md overflow-hidden p-4  bg-white border border-gray-200 relative"
    >
      <h2 className="text-2xl font-bold text-pretty  mb-2">
        {event.eventName}
      </h2>
      <div className="flex flex-row justify-between items-center mb-2">
        {event.eventDateTime && (
          <p className="flex">
            <span className="mr-2">
              <CiCalendarDate className="text-blue-500 text-2xl" />
            </span>
            {new Date(event.eventDateTime).toLocaleDateString()}
          </p>
        )}
        {event.eventDateTime && (
          <p className=" flex">
            <span className="mr-2">
              <CiTimer className="text-blue-500 text-2xl" />
            </span>
            {new Date(event.eventDateTime).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
        )}
      </div>

      {event.organiser && (
        <p className="mb-2 flex">
          <span className="font-semibold">By:&nbsp;</span>
          {event.organiser}
        </p>
      )}
      {event.description && (
        <p className="text-gray-400 mb-2">
          <span className="font-semibold">Description :</span>{" "}
          {event.description}
        </p>
      )}
      {userId === "dEomW1zG2xVM489pAc4vwL98RP63" ? (
        <div className="absolute top-4 right-4">
          <DeleteButton id={event.id} />
        </div>
      ) : (
        <div>
          <HiBookmark />
        </div>
      )}
    </div>
  ));
};

export default EventData;
