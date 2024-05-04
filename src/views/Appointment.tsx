import { useContext, useEffect, useState } from "react";
// import PickDate from "../components/PickDate";
import { useLocation, useNavigate } from "react-router-dom";
import {
  PiNumberCircleOne,
  PiNumberCircleThree,
  PiNumberCircleTwo,
} from "react-icons/pi";
import { UserContext } from "../contexts/UserContext";

// type Date = String | null;

function Appointment() {

  // const [date, setDate] = useState<Date>(null);

  const userContext = useContext(UserContext);
  const navigate = useNavigate();
  let { state } = useLocation();
  const [disable, setDisable] = useState(true);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const newAppt = {
      _id: userContext.email,
      service: state.service,
      date: data.get('date'),
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

    if (results.status === 201) {
      userContext.setAppt(await results.json());
      alert(`Your appointment is all set!`);
      navigate("/");
    } else {
      alert(
        `Defer to the status code: ${results.status}, to determine what went wrong.`
      );
    }
    navigate("/");
  };

  // useEffect(()=> {
  //   // check available Days by user specifed Date
  //   async function getSlots(date:any) {
  //     setDate(date);
  //     // const availableSlots = await fetch(`http://localhost:5000/retrieveAvailabilityId/${date}`, {
  //     //   method: "get"
  //     // });
  //     // console.log(await availableSlots.json());
  //   }
  // getSlots(date);
  // }, [date]);



  return (
    <>
    <div className="flex justify-center">
    <div className="flex flex-col text-black gap-y-2 p-4">
      <form onSubmit={handleSubmit}>

          <div className="flex flex-col flex-wrap text-black  mb-2">
            <div className="flex border bg-calendarBG p-4 rounded-md">
              Stylist: Melissa McGill
            </div>
          </div>

          <div className="flex flex-col flex-wrap bg-calendarBG p-4 gap-x-2 gap-y-6 rounded-md">
            <label
              className="flex flex-col text-left"
              id="chosenService"
            >
              Chosen Service:{" "}
              {state ? state.service : "No Service has been chosen..."}
            </label>

            <div className="flex flex-col items-start border border-gray-300 p-2 rounded-md shadow-lg">
              <label className="flex gap-x-2 items-center">
                <PiNumberCircleOne className="text-blue-500"/> Choose an
                available day for your appointment
              </label>
              <input  
                id="date"
                name="date"               
                className="bg-white p-1 ml-6 mt-2 w-[40vw]"
                placeholder="Weekday Month Day Year">
              </input>
              {/* <PickDate date={date} setDate={setDate}/> */}
            </div>

            <div className="flex flex-col items-start border border-gray-300 p-2 rounded-md shadow-lg">
              <label className="flex gap-x-2 items-center">
                <PiNumberCircleTwo className="text-blue-500" /> Choose an available time for your
                appointment
              </label>
              <input
                name="time"
                id='time'
                className="bg-white p-1 ml-6 mt-2 w-[40vw]"
                placeholder="Select Time"
              ></input>
              <button
                disabled={false}
                className="bg-blue-500 p-1 ml-6 mt-4 mb-6 w-[20vw] rounded-sm text-white shadow-md"
              >
                Submit
              </button>
            </div>

            <div className="flex flex-col items-start border border-gray-300 p-2 rounded-md shadow-lg">
              <label className="flex gap-x-2 items-center">
                <PiNumberCircleThree  className="text-blue-500"/> Send your stylist any information for
                your appointment (optional)
              </label>
              <textarea
                name="description"
                id="description"
                rows={4}
                className="flex bg-white rounded-sm p-3 ml-6 mt-2 mb-6 w-[40vw]"
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
