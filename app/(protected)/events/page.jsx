import { deleteDoc, doc, getDocs, setDoc } from "firebase/firestore";
import React from "react";
import { Events as EventCollection } from "@firebase/collections";

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

  await deleteDoc(doc(EventCollection, "LL2wPVgPv3SFQl0yUMgQ"));
  return (
    <div>
      <div>
        {data.map((event) => (
          <div key={event.id}>
            <p>{event.id}</p>
            <h2>{event.eventName}</h2>
            <p>{event.description}</p>
            <p>{event.organiser}</p>
            <br />
            {/* Add more event details here */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
