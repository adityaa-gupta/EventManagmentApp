"use client";

import { Events } from "@firebase/collections";
import { toastSuccess } from "@utils/toast";
import { addDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@components/ui/dialog";

import { Button } from "./ui/button";

const CreateEventForm = () => {
  const [eventName, setEventName] = useState("");
  const [eventDateTime, setEventDateTime] = useState("");
  const [description, setDescription] = useState("");
  const [banner, setBanner] = useState("");
  const [organiser, setOrganiser] = useState("");
  const [open, setOpen] = useState(false);
  const router = useRouter();

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
      router.refresh();
      toastSuccess("Event added successfully");
      setOpen(false);
      console.log("Document written with ID: ");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <Dialog open={open}>
      <DialogTrigger onClick={() => setOpen(true)}>Add new event</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create a new event</DialogTitle>
          <div className="flex flex-col py-4 space-y-4 rounded-md">
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
              <label
                htmlFor="eventDateTime"
                className="w-1/4 text-sm font-medium"
              >
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
              <label
                htmlFor="description"
                className="w-1/4 text-sm font-medium"
              >
                Description:
              </label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
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
          </div>
        </DialogHeader>
        <DialogFooter>
          <Button onClick={handleSubmit}>Add Event</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CreateEventForm;
