"use client";

import { Events } from "@firebase/collections";
import { toastSuccess } from "@utils/toast";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import React, { useState } from "react";

const CreateEventForm = () => {
  const [eventName, setEventName] = useState("");
  const [eventDateTime, setEventDateTime] = useState("");
  const [description, setDescription] = useState("");
  const [banner, setBanner] = useState("");
  const [organiser, setOrganiser] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(eventName, eventDateTime, description, organiser);
    try {
      await addDoc(Events, {
        eventName,
        eventDateTime,
        description,
        organiser,
      });
      console.log("event added");
      toastSuccess("Event added successfully");
      console.log("Document written with ID: ");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 ">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col space-y-4 bg-slate-100 p-[50px] rounded-md"
      >
        <div className="flex items-center">
          <label htmlFor="eventName" className="w-1/4 text-sm font-medium">
            Event Name:
          </label>
          <input
            id="eventName"
            type="text"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div className="flex items-center">
          <label htmlFor="eventDateTime" className="w-1/4 text-sm font-medium">
            Event Date and Time:
          </label>
          <input
            id="eventDateTime"
            type="datetime-local"
            value={eventDateTime}
            onChange={(e) => setEventDateTime(e.target.value)}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div className="flex items-center">
          <label htmlFor="description" className="w-1/4 text-sm font-medium">
            Description:
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        {/* <div className="flex items-center">
          <label htmlFor="banner" className="w-1/4 text-sm font-medium">
            Banner:
          </label>
          <input
            id="banner"
            type="file"
            accept="image/*"
            onChange={(e) => setBanner(e.target.files[0])}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div> */}
        <div className="flex items-center">
          <label htmlFor="organiser" className="w-1/4 text-sm font-medium">
            Organiser:
          </label>
          <input
            id="organiser"
            type="text"
            value={organiser}
            onChange={(e) => setOrganiser(e.target.value)}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateEventForm;
