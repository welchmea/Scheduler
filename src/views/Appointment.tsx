import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import Calendar from "react-calendar";

function Appointment() {
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
  return (
    <>
      <div className="bg-[url('./assets/images/giorgio-trovato-qrz6s4yDcIM-unsplash.jpg')] h-full w-full bg-cover bg-left"></div>

      <div className="flex flex-wrap p-2 gap-x-10 justify-center items-start z-2 absolute mt-48 text-black w-full">
        <div className="flex flex-col gap-y-1 border border-white bg-backgroundCard rounded-md h-5/6 p-8 ">
          <label className="flex text-xl border border-white bg-calendarBG p-4 rounded-md">
            Appointment Scheduler
          </label>
          <div className="flex flex-wrap">
            <Calendar />
          </div>
          <div className="flex text-xl border border-white bg-calendarBG p-4 rounded-md">
            Stylist: Melissa McGill
          </div>
        </div>

        <div className="flex flex-col gap-y-1 border border-white bg-backgroundCard rounded-md h-5/6 p-8">
          <div className="flex flex-col place-content-center gap-y-1">
            <div className="flex text-xl border border-white bg-calendarBG p-4 rounded-md">
              <Dropdown
                className="w-[40vh] text-left shadow-lg"
                options={options}
              />
            </div>
            <div className="flex flex-col items-start text-xl border border-white bg-calendarBG p-4 rounded-md gap-y-4">
              <label>Pick a time:</label>
              <div className="flex flex-row w-full justify-around">
                {times.map((i) => (
                  <button className="transition delay-100 duration-300 ease-in-out transform hover:scale-110 p-3 border-2 border-white bg-white rounded-md hover:bg-backgroundCard">
                    {i}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex flex-col text-left border p-3 text-md border-gray-300 bg-calendarBG shadow-lg rounded-md">
              <label className="flex text-xl border bg-white border-gray-300 p-3">
                Notes for stylist...
              </label>
              <textarea className="flex bg-white border border-gray-300 w-[60vh] p-3"></textarea>
            </div>
            <div className="flex flex-col text-left border p-3 text-md border-gray-300 bg-calendarBG shadow-lg rounded-md">
              <button className="hover:bg-backgroundCard bg-white transition delay-100 duration-300 ease-in-out transform hover:scale-105 text-xl w-1/3 border border-white p-2 rounded-md">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Appointment;
