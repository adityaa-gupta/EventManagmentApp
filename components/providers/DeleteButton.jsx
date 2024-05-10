import React from "react";
import { deleteDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import { Events } from "@firebase/collections";

export const EventDelete = async ({ id }) => {
  try {
    await deleteDoc(doc(Events, id)); // Assuming your collection is named "events"
    toast.success("Event deleted successfully!");
  } catch (error) {
    console.error("Error deleting event:", error);
    toast.error("Failed to delete event. Please try again.");
  }
};

export const DeleteButton = ({ eventId }) => {
  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      await EventDelete({ id: eventId });
    }
  };

  return (
    <button type="button" className="delete-button" onClick={handleDelete}>
      Delete
    </button>
  );
};

export default DeleteButton;
