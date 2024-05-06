import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export default function Profile() {
  const userContext = useContext(UserContext);

  return (
    <>
      <div className="flex flex-col bg-white text-left p-4 mx-4 mt-4 rounded-sm border border-gray-500">
        <div className="text-2xl">Name: {userContext.username}</div>
        <div className="text-xl">Email: {userContext.email}</div>
        {userContext.appt && (
        <div className="border w-[40vw] p-3 rounded-md mt-4 mb-4">
        Appointment:
        <div className="ml-3">{userContext.appt[0]}</div>
        <div className="ml-3">{userContext.appt[1]}</div>
        <div className="ml-3">{userContext.appt[2]}</div>
        <div className="ml-3">{userContext.appt[3]}</div>
        <button className="bg-red-500 p-1 px-1.5 rounded-md shadow-md text-white ml-3 text-sm">Cancel</button>
        <button className="bg-gray-600 p-1 px-1.5 rounded-md shadow-md text-white ml-3 text-sm">Edit</button>
      </div>
        )}

        <div className="flex place-content-end gap-x-4">
        <button className="bg-blue-600 text-white rounded-md p-1 px-1.5 shadow-md">Edit Profile</button>
        <button className="bg-black text-white rounded-md p-1 px-1.5 shadow-md">Logout</button>
        </div>
      </div>
    </>
  );
}
