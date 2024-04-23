import { useState } from "react";
import Calendar from "react-calendar";
import { useNavigate } from "react-router-dom";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

function Appointment() {
  const navigate = useNavigate();
  const [date, setDate] = useState<Value>(new Date());
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
    console.log({
      service: data.get("service"),
      date: date,
      time: data.get("time"),
      description: data.get("description"),
    });

    const newAppt = {
      service: data.get("service"),
      date: date,
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
      alert(`Your appointment is set!`);
      navigate("/");
    } else {
      alert(
        `Defer to the status code: ${results.status}, to determine what went wrong.`
      );
    }
    navigate("/");
  };

  const adding = async (data: { day: any; time: any }) => {
    const newTimeSlot = {
      _id: Date.now(),
      day: data.day,
      time: data.time,
    };
    console.log(newTimeSlot);
    // const results = await fetch("http://localhost:5000/createAppointment" ,{
    //   method: "post",
    //   body: JSON.stringify(newTimeSlot),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });

    // if (results.status === 201) {
    //   alert(`Your appointment is set!`);
    // } else {
    //   alert(
    //     `Defer to the status code: ${results.status}, to determine what went wrong.`
    //   );
    // }
  };
  // const data = { day: "Monday", time: "9:00 AM" };
  const addtoDatabase = () => {
    console.log("here");
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday"];
    const times = ["9:00 AM", "10:00 AM", "12:00 PM", "2:00 PM"];

    let day = null;
    let time = null;
    let id = new Date();
    console.log(id);
    for (let l = 0; l < 30; l++) {
      for (let i = 0; times.length > i; i++) {
        time = times[i];
        for (let j = 0; days.length > j; j++) {
         day = days[j];
          let data = { id: id, day: day, time: time };
          console.log(data);
        }

        // adding(data);
      }
      id.setDate(id.getDate() + 1);
    }
  };

  return (
    <>
      <div className="flex flex-wrap gap-x-4 justify-center text-black">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col border border-black rounded-md bg-white p-4 gap-y-2">
            <label
              id="date"
              className="flex flex-col text-xl border border-black bg-calendarBG p-4 rounded-md"
            >
              Appointment Scheduler
              <div
                id="date"
                className="flex flex-wrap border border-black rounded-md"
              >
                <Calendar value={date} onChange={setDate} />
              </div>
            </label>
            <div className="flex text-xl border border-black bg-calendarBG p-4 rounded-md">
              Stylist: Melissa McGill
            </div>
          </div>

          <div className="flex border border-black bg-white rounded-md p-4">
            <div className="flex flex-col gap-y-2 w-full">
              <div className="flex text-xl border border-black bg-calendarBG p-4 rounded-md">
                <label className="flex flex-col text-left" id="time">
                  Select one option
                  <select
                    name="service"
                    className="bg-white p-1 border rounded-md w-[30vh]"
                  >
                    {options.map((i) => (
                      <option key={i} value={i}>
                        {i}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
              <div className="flex text-xl border border-black bg-calendarBG p-4 rounded-md">
                <label className="flex flex-col text-left" id="time">
                  Select one option
                  <select
                    name="time"
                    className="bg-white p-1 border rounded-md w-[30vh]"
                  >
                    {times.map((i) => (
                      <option key={i} value={i}>
                        {i}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <div className="flex text-left border p-3 text-md border-black bg-calendarBG rounded-md">
                <label
                  id="description"
                  className="flex flex-col text-xl border bg-white border-black p-3"
                >
                  Notes for stylist...
                  <textarea
                    name="description"
                    id="description"
                    className="flex bg-white border border-black p-3"
                  ></textarea>
                </label>
              </div>
              <div className="flex border border-black p-3 text-md bg-calendarBG shadow-lg rounded-md place-content-center">
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
      <button
        className="bg-white p-4 w-full text-black"
        onClick={addtoDatabase}
      >
        Click
      </button>
    </>
  );
}
export default Appointment;
