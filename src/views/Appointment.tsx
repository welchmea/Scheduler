import { useState } from "react";
import Calendar from "react-calendar";
import { useNavigate } from "react-router-dom";
import { times, options } from '../assets/data/data';
type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

function Appointment() {
  const navigate = useNavigate();
  const [date, setDate] = useState<Value>(new Date());

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

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
    console.log(results);

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

  return (
    <>
      <div className="flex flex-wrap gap-x-4 justify-center text-black">
        <form onSubmit={handleSubmit}>
          <div className="flex border border-black bg-white rounded-md p-4">
            <div className="flex flex-col gap-y-2 w-full">
              <div className="flex text-xl border border-black bg-calendarBG p-4 rounded-md">
                <label className="flex flex-col text-left" id="time">
                  Select a Service
                  <select
                    name="service"
                    className="bg-white p-1 border rounded-md"
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
    </>
  );
}
export default Appointment;
