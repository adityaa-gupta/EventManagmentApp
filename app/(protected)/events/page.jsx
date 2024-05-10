import React from "react";
import { deleteDoc, doc, getDocs, setDoc } from "firebase/firestore";
import { Events as EventCollection } from "@firebase/collections";
import { CiCalendarDate, CiTimer } from "react-icons/ci";

import AddEvent from "@components/AddEvent";

import { toastSuccess } from "@utils/toast";
import DeleteButton from "@components/providers/DeleteButton";
const Events = async () => {
  const docs = (await getDocs(EventCollection)).docs;
  const data = [];
  for (const doc of docs) {
    data.push({ ...doc.data(), id: doc.id });
  }

  await setDoc(
    doc(EventCollection, "LL2wPVgPv3SFQl0yUMgQ"),
    {
      eventName: "Hello",
    },
    { merge: true }
  );

  return (
    <div className="container mx-auto px-4 py-8  rounded-lg shadow-md">
      <h1 className="text-8xl font-bold text-blue-50 mb-6">Events</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {data.map((event) => (
          <div
            key={event.id}
            className="flex flex-col  rounded-lg shadow-md overflow-hidden p-4  bg-[#E3FEF7]"
          >
            <h2 className="text-2xl font-bold text-[#135D66] text-pretty  mb-2">
              {event.eventName}
            </h2>
            <div className="flex flex-row justify-between items-center mb-2">
              {event.eventDateTime && (
                <p className="text-[#457771] flex">
                  <span className="mr-2">
                    <CiCalendarDate className=" text-2xl text-[#457771] " />
                  </span>
                  {new Date(event.eventDateTime).toLocaleDateString()}
                </p>
              )}
              {event.eventDateTime && (
                <p className="text-[#457771]  flex">
                  <span className="mr-2">
                    <CiTimer className=" text-2xl text-[#457771]  " />
                  </span>
                  {new Date(event.eventDateTime).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              )}
            </div>

            {event.organiser && (
              <p className="text-[#135D66] mb-2 flex">By: {event.organiser}</p>
            )}
            {event.description && (
              <p className="text-[#135D66]  mb-2">
                Description: {event.description}
              </p>
            )}
            <DeleteButton id={event.id} />
          </div>
        ))}
      </div>
      <div>
        <AddEvent />
      </div>
    </div>
  );
};

export default Events;
