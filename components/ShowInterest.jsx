import React from "react";
import { HiHeart } from "react-icons/hi2";
import { doc, getDoc, setDoc, updateDoc } from "@firebase/firestore";
import useAuthStore from "@store/useAuthStore";
import db from "@firebase/config";

const ShowInterest = ({ id }) => {
  const { user } = useAuthStore();
  const userEmail = user.email;

  const handleInterest = async () => {
    try {
      const eventRef = doc(db, Event, id);
      const eventSnapshot = await getDoc(eventRef);

      if (eventSnapshot.exists()) {
        await updateDoc(eventRef, {
          interested: firebase.firestore.FieldValue.arrayUnion(userEmail),
        });
        console.log("User interest added successfully");
      } else {
        await setDoc(eventRef, {
          interested: [userEmail],
        });
        console.log("New event document created with user interest");
      }
    } catch (error) {
      console.error("Error adding user interest:", error.message);
    }
  };

  return (
    <div>
      <HiHeart onClick={handleInterest} />
    </div>
  );
};

export default ShowInterest;
