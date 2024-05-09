import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import db from "@firebase/config";

const GetEvents = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const docRef = doc(db, "Events", "SF");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          console.log("Document data:", docSnap.data());
          setEvents(docSnap.data());
        } else {
          // docSnap.data() will be undefined in this case
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching document:", error);
      }
    };

    fetchEvents();
  }, []); // Empty dependency array ensures the effect runs only once
  console.log(events);
  return (
    <div>
      {events.map((event, index) => (
        <p key={event.id}>{event.Name}</p> // Add a key prop for each rendered element
      ))}
    </div>
  );
};

export default GetEvents;
