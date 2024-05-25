import { useContext, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useLocation, useNavigate } from "react-router-dom";
import {
  PiNumberCircleOne,
  PiNumberCircleThree,
  PiNumberCircleTwo,
} from "react-icons/pi";
import { UserContext } from "../contexts/UserContext";
import ProfileImg from '../assets/images/jake-nackos-IF9TK5Uy-KI-unsplash.jpg';
import { AutoLogin } from "../components/AutoLogin";

function Appointment() {
  AutoLogin();
  const [date, setDate] = useState<Date>(new Date(Date.now()));

  const userContext = useContext(UserContext);
  const navigate = useNavigate();
  let { state } = useLocation();

  const [times, setTimes] = useState([]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const newAppt = {
      _id: userContext.email,
      service: state.service,
      date: date.toDateString(),
      time: data.get("time"),
      description: data.get("description"),
    };
    const results = await fetch("http://localhost:5000/createAppointment", {
      method: "post",
      body: JSON.stringify(newAppt),
      headers: {
        "Content-Type": "application/json",
      },
    });

    // delete Time Slot from Date and update user profile
    if (results.status === 201) {
      await fetch(`http://localhost:5000/updateUser/${userContext.email}`, {
        method: "put",
        body: JSON.stringify({
          id: newAppt._id,
          appointment: {
            service: newAppt.service,
            date: newAppt.date,
            time: newAppt.time,
            description: newAppt.description,
          },
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      alert(`Your appointment is all set!`);
      navigate("/");
    } else {
      alert(
        "You already have an appointment!"
      );
    }
  };

  useEffect(() => {
    // check available Days by user specifed Date
    async function getSlots(date: Date) {
      let dateDB = date.toDateString();
      const availableSlots = await fetch(
        `http://localhost:5000/retrieveAvailabilityId/${dateDB}`,
        {
          method: "get",
        }
      );
      const results = await availableSlots.json();
      setTimes(results.timeSlots);
    }
    getSlots(date);
  }, [date]);

  const isWeekday = (date: any) => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  };

  return (
    <>
      <div className="flex justify-center">
        <div className="flex flex-col text-black gap-y-2 p-4">
          <form onSubmit={handleSubmit}>
            <div className="flex justify-between border border-gray-300 bg-calendarBG p-4 rounded-md mb-4 shadow-lg">
              Stylist: Melissa McGill
              <div className="flex-shrink-0">
              <img className="h-8 w-8 rounded-full" src={ProfileImg} alt='' />
              </div>
            </div>

            <div className="flex flex-col flex-wrap border border-gray-300 bg-calendarBG p-4 gap-x-2 gap-y-6 rounded-md shadow-lg">
              <label className="flex flex-col text-left" id="chosenService">
                Chosen Service:{" "}
                {state ? state.service : "No Service has been chosen..."}
              </label>

              <div className="flex flex-col items-start border border-gray-300 p-2 rounded-md shadow-lg">
                <label className="flex gap-x-2 items-center">
                  <PiNumberCircleOne className="text-blue-500" /> Choose an
                  available day for your appointment
                </label>
                <DatePicker
                  className="bg-white p-1 ml-6 mt-2 mb-6 w-[40vw]"
                  selected={date}
                  minDate={new Date(Date.now())}
                  filterDate={isWeekday}
                  onChange={(date) => date && setDate(date)}
                />
              </div>

              <div className="flex flex-col items-start border border-gray-300 p-2 rounded-md shadow-lg">
                <label className="flex gap-x-2 items-center">
                  <PiNumberCircleTwo className="text-blue-500" /> Choose an
                  available time for your appointment
                </label>
                <select
                  name="time"
                  id="time"
                  className="bg-white p-1 ml-6 mt-2 w-[40vw]"
                >
                  {times && times.map((i) => <option key={i}>{i}</option>)}
                </select>
                <button
                  disabled={times.length > 0 ? false : true}
                  className="bg-blue-500 p-1 ml-6 mt-4 mb-6 w-[20vw] rounded-sm text-white shadow-md"
                >
                  Submit
                </button>
              </div>

              <div className="flex flex-col items-start border border-gray-300 p-2 rounded-md shadow-lg">
                <label className="flex gap-x-2 items-center">
                  <PiNumberCircleThree className="text-blue-500" /> Send your
                  stylist any information for your appointment (optional)
                </label>
                <textarea
                  name="description"
                  id="description"
                  rows={4}
                  className="flex bg-white rounded-sm p-3 ml-6 mt-2 mb-6 w-5/6"
                ></textarea>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default Appointment;
