import { useContext, useState } from "react";
import Calendar from "react-calendar";
import { useNavigate } from "react-router-dom";
import { times, options } from "../assets/data/data";
import { UserContext } from "../contexts/UserContext";

type NewDate = Date | null;

function Appointment() {

  const userContext = useContext(UserContext);
  
  const navigate = useNavigate();
  const [date, setDate] = useState<NewDate>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const newAppt = {
      _id: userContext.username,
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
      userContext.setAppt(await results.json())
      alert(`Your appointment is all set for ${date}!`);
      navigate('/');
    } else {
      alert(
        `Defer to the status code: ${results.status}, to determine what went wrong.`
      );
    }
    navigate("/");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-row flex-wrap gap-y-1">
          <div className="flex flex-col text-black md:w-1/2 lg:w-1/2">
            <div className="flex flex-col p-4 gap-y-2">
              <label
                id="date"
                className="flex flex-col text-xl text-left border border-black bg-white p-4 rounded-md"
              >
                Appointment Scheduler: Pick a day
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
          </div>
          <div className="flex flex-col flex-wrap text-black">
            {date && (
              <>
                <div className="flex flex-wrap place-content-around text-xl bg-calendarBG p-4 gap-x-2 gap-y-2 h-5/6 rounded-md mt-4">
                  <label
                    className="flex flex-col text-left w-full"
                    id="service"
                  >
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
                  <label className="flex flex-col text-left w-full" id="time">
                    Select one option
                    <select
                      name="time"
                      className="bg-white p-1 border rounded-md"
                    >
                      {times.map((i) => (
                        <option key={i} value={i}>
                          {i}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label
                    id="description"
                    className="flex flex-col text-xl text-left w-full"
                  >
                    Notes for stylist... (optional)
                    <textarea
                      name="description"
                      id="description"
                      className="flex bg-white rounded-md p-3"
                    ></textarea>
                  </label>
                  <button
                    type="submit"
                    className="hover:bg-backgroundCard bg-white transition delay-100 duration-300 ease-in-out transform hover:scale-105 text-xl w-full p-2 rounded-md "
                  >
                    Submit
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </form>
    </>
  );
}
export default Appointment;
