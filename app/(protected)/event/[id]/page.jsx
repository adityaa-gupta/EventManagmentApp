"use client";
import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import db from "@firebase/config";
import { Events } from "@firebase/collections";

const Event = ({ params }) => {
  const [eventData, setEventData] = useState(null);
  const { id } = params;

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const eventRef = doc(db, Events, id);
        const eventDoc = await getDoc(eventRef);

        if (eventDoc.exists()) {
          setEventData(eventDoc.data());
        } else {
          console.error("Event document not found:", id);
        }
      } catch (error) {
        console.error("Error fetching event data:", error);
      }
    };

    fetchEventData();
  }, [id]); // Ensure dependencies are up-to-date

  return (
    <div>
      {eventData ? (
        <>
          <h2>Event: {eventData.name}</h2>
          <p>Description: {eventData.description}</p>
          {/* Add more event details here */}
        </>
      ) : (
        <p>Loading event data...</p>
      )}
    </div>
  );
};

export default Event;
