import { useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import { AutoLogin } from "../components/AutoLogin";

export default function Profile() {
  AutoLogin();
  const navigate = useNavigate();
  const userContext = useContext(UserContext);

  const logoutUser = async () => {
    const response = await fetch("http://localhost:5000/logout", {
      method: "GET",
      credentials: "include",
    });

    if (response.status === 200) {
      userContext.setEmail(null)
      navigate("/");
    }
  }
  useEffect(() => {
    async function getUserData() {
      let id = userContext.email
      const response = await fetch(`http://localhost:5000/retrieveUsersId/${id}`, {
        method: "GET",
      });

      if (response.status === 200 || response.status === 201) {
        let appt = await response.json()
        userContext.setUsername(appt.firstName + ' ' + appt.lastName)
        userContext.setAppt(appt.appointment)
      } 
    }
    getUserData();
  }, [userContext.email]);

  const cancelAppt = async () => {
    const res = await fetch(`http://localhost:5000/updateUser/${userContext.email}`, {
      method: "put",
      body: JSON.stringify({id: userContext.email, appointment: ' ' }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.status == 200 || res.status == 201 ){
      const results = await fetch(`http://localhost:5000/deleteAppointmentId/${userContext.email}`, {
        method: "delete",
        body: JSON.stringify({id: userContext.email }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.status <= 204 && res.status >= 200 ){
        // const createAppt = await fetch(`http://localhost:5000/createAvailableId/${userContext.appt.date}`, {
        //   method: "post",
        //   body: JSON.stringify({id: userContext.appt.date, time: userContext.appt.time}),
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        // });
        // console.log(createAppt);
        // if (createAppt.status == 201 || createAppt.status == 200) {
          userContext.setAppt(null);
        // }
      }
    };
  }
  return (
    <>
      <div className="flex flex-col bg-white text-left p-4 mx-4 mt-4 rounded-sm border border-gray-500">
        <div className="text-2xl">Name: {userContext.username}</div>
        <div className="text-xl">Email: {userContext.email}</div>
        {userContext.appt && (
        <div className="border w-[40vw] p-3 rounded-md mt-4 mb-4">
        Appointment:
        <div className="ml-3">{userContext.appt.service}</div>
        <div className="ml-3">{userContext.appt.date}</div>
        <div className="ml-3">{userContext.appt.description}</div>
        <div className="ml-3">{userContext.appt.time}</div>
        <button onClick={cancelAppt} className="bg-red-500 p-1 px-1.5 rounded-md shadow-md text-white ml-3 text-sm">Cancel</button>
      </div>
        )}

        <div className="flex place-content-end gap-x-4">
        <button className="bg-blue-600 text-white rounded-md p-1 px-1.5 shadow-md">Edit Profile</button>
        <button onClick={logoutUser} className="bg-black text-white rounded-md p-1 px-1.5 shadow-md">Logout</button>
        </div>
      </div>
    </>
  );
}
