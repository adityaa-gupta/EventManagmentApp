import { getDocs } from "firebase/firestore";
import { Events as EventCollection } from "@firebase/collections";
import { CiCalendarDate, CiTimer } from "react-icons/ci";
import DeleteButton from "@components/DeleteButton";
import { HiHeart, HiListBullet } from "react-icons/hi2";
import LogoutButton from "@components/LogoutButton";
import EventData from "@components/EventData";
import CreateEventForm from "@components/CreateEventForm";
export const dynamic = "force-dynamic";
const Events = async () => {
  const docs = (await getDocs(EventCollection)).docs;
  const data = [];
  for (const doc of docs) {
    data.push({ ...doc.data(), id: doc.id });
  }
  // Opt out of caching for all data requests in the route segment

  return (
    <div className=" mx-auto p-4 bg-gray-200">
      <nav className="flex sticky justify-between items-center mb-8 rounded-lg bg-white text-2xl font-semibold text-black p-2">
        <HiHeart className="text-red-500" />
        <h1 className="text-2xl font-bold text-black">Events</h1>
        <LogoutButton />
      </nav>
      <div
        className="bg-blue-500 text-blue-50
      py-4 px-2 rounded-lg mb-4 text-center text-2xl font-semibold
        "
      >
        <CreateEventForm />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <EventData data={data} />
      </div>
    </div>
  );
};

export default Events;
