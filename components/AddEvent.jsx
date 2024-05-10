"use client";
import Button from "./Button";
import Modal from "./Modal";
import CreateEventForm from "./providers/CreateEventForm";

function AddEvent() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add New Event</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateEventForm onCloseModal={Modal.close} />
        </Modal.Window>
      </Modal>
    </div>
  );
}
export default AddEvent;
