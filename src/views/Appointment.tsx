import { useState } from "react";
import Calendar from "react-calendar";
import { useNavigate } from "react-router-dom";

function Appointment() {
  const navigate = useNavigate();
  const [date, setDate] = useState('');
  const options = [
    "Cut",
    "Color",
    "Blowout",
    "Cut and Color",
    "Foil",
    "Partial Foil",
    "Balayage",
  ];

  const times = ["9:00 am", "10:00 am", "12:00 pm", "1:00 pm"];

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {

    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log(data)
    console.log({
      service: data.get("service"),
      date: data.get("date"),
      time: data.get("time"),
      description: data.get("description"),
    });

    // const newAppt = {
    //   service: data.get("service"),
    //   date: data.get("date"),
    //   time: data.get("time"),
    //   description: data.get("description"),
    // };
    // const results = await fetch("http://localhost:5000/createAppointment", {
    //   method: "post",
    //   body: JSON.stringify(newAppt),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });

    // if (results.status === 201) {
    //   alert(`Your appointment is set!`);
    //   navigate("/");
    // } else {
    //   alert(
    //     `Defer to the status code: ${results.status}, to determine what went wrong.`
    //   );
    // }
    // navigate("/");
  };

  return (
    <>
      <div className="flex flex-wrap p-2 gap-x-4 justify-center items-start z-2 absolute mt-48 text-black w-full">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-y-1 border border-black rounded-md h-5/6 p-8 bg-white">
            <label id="date" className="flex text-xl border border-black bg-calendarBG p-4 rounded-md">
              Appointment Scheduler
            
            <div
              id="date"
              className="flex flex-wrap border border-black rounded-md"
            >
              <Calendar onClickDay={(data) => {
                console.log(data.getDate(), data.getMonth());
                // setDate(data);
              }} />
            </div>
            </label>
            <div className="flex text-xl border border-black bg-calendarBG p-4 rounded-md">
              Stylist: Melissa McGill
            </div>
          </div>

          <div className="flex flex-col border border-black bg-white rounded-md p-8">
            <div className="flex flex-col place-content-center gap-y-1">
             
             <div className="flex text-xl border border-black bg-calendarBG p-4 rounded-md items-center">
                <label className="flex mr-12" id="time">Select one option
                <select name="service" className="bg-white p-1 border rounded-md w-[30vh]">
                  {
                    options.map((i) => (
                      <option key={i} value={i}>{i}</option>
                    ))
                  }
                </select>
                </label>
              </div>
              <div className="flex text-xl border border-black bg-calendarBG p-4 rounded-md items-center">
                <label className="flex mr-12" id="time">Select one option
                <select name="time" className="bg-white p-1 border rounded-md w-[30vh]">
                  {
                    times.map((i) => (
                      <option key={i} value={i}>{i}</option>
                    ))
                  }
                </select>
                </label>
              </div>
              {/* <div className="flex flex-col items-start text-xl border border-black bg-calendarBG p-4 rounded-md gap-y-4">
                <label id="time">Pick a time:</label>
                <div className="flex flex-row w-full justify-around">
                  {times.map((i) => (
                    <ul
                      key={i}
                      className="transition delay-100 duration-300 ease-in-out transform hover:scale-110 p-3 border border-black bg-white rounded-md hover:bg-backgroundCard"
                    >
                      {i}
                    </ul>
                  ))}
                </div> */}
              {/* </div> */}
              <div className="flex flex-col text-left border p-3 text-md border-black bg-calendarBG shadow-lg rounded-md">
                <label
                  id="description"
                  className="flex text-xl border bg-white border-black p-3"
                >
                  Notes for stylist...
                
                <textarea
                  name="description"
                  id="description"

                  className="flex bg-white border border-black w-[60vh] h-[21vh] p-3"
                ></textarea>
                </label>
              </div>
              <div className="flex border border-black p-3 text-md bg-calendarBG shadow-lg rounded-md">
                <button
                  
                  type="submit"
                  className="hover:bg-backgroundCard bg-white transition delay-100 duration-300 ease-in-out transform hover:scale-105 text-xl w-1/3 border border-black p-2 rounded-md"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
export default Appointment;
