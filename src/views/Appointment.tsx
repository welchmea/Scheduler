import { useContext } from "react";
import PickDate from "../components/PickDate";
import { useNavigate } from "react-router-dom";
import { times, options } from "../assets/data/data";
import { UserContext } from "../contexts/UserContext";

function Appointment() {
  const userContext = useContext(UserContext);

  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const newAppt = {
      _id: userContext.email,
      service: data.get("service"),
      date: PickDate,
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

  return (
    <>
      <form onSubmit={handleSubmit}>
          <div className="flex flex-col text-black gap-y-2 p-4 w-full">
            <div className="flex flex-wrap bg-calendarBG p-4 gap-x-2 gap-y-4 rounded-md">
              <label className="flex flex-col text-left w-full" id="service">
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
                <select name="time" className="bg-white p-1 border rounded-md">
                  {times.map((i) => (
                    <option key={i} value={i}>
                      {i}
                    </option>
                  ))}
                </select>
              </label>
              <label
                id="description"
                className="flex flex-col text-left w-full"
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

            <div className="flex flex-col place-content-center flex-wrap text-black w-full mb-4">
              <div className="flex border border-black bg-calendarBG p-4 rounded-md w-full">
                Stylist: Melissa McGill
              </div>
            </div>
          </div>
      </form>
    </>
  );
}
export default Appointment;
