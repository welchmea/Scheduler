// import Photo from "./assets/images/lindsay-cash-Md_DhaFsnCQ-unsplash.jpg";
// import "react-calendar/dist/Calendar.css";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import Calendar from "react-calendar";
import Sidebar from "./Sidebar";

function Appointment() {
  const options = [
    "Cut",
    "Color",
    "Blowout",
    "Cut and Color",
    "Foil",
    "Partial Foil",
  ];
  return (
    <>
      <div className="bg-[url('./assets/images/lindsay-cash-Md_DhaFsnCQ-unsplash.jpg')] h-[100vh] bg-cover"></div>
      {/* <img className="filter brightness-50 absolute" src={Photo} alt="home-page" /> */}
      <div className="flex flex-wrap w-full h-1/6 p-4 filter text-white absolute">
        <Sidebar />
      </div>
      <div className="flex flex-wrap p-2 w-full h-5/6 gap-x-10 justify-center z-2 absolute mt-28 text-black">
        <div className="flex flex-col place-content-center gap-y-8">
          <div className="flex">
            <Dropdown
              className="w-[40vh] text-left shadow-xl"
              options={options}
            />
          </div>

          <div className="flex flex-col text-left border p-3 text-md border-gray-300 bg-white shadow-xl">
            <label className="flex border border-gray-300 p-3">
              Notes for stylist...
            </label>
            <textarea className="flex bg-apptHeaders border border-gray-300 w-[60vh] h-full p-3"></textarea>
          </div>
          <div className="flex">
            <button className="transition delay-150 duration-300 ease-in-out transform hover:scale-110 text-2xl text-white border border-white p-2 rounded-md">
              Submit
            </button>
          </div>
        </div>

        <div className="flex flex-wrap place-content-center h-full">
          <Calendar />
        </div>
      </div>
    </>
  );
}
export default Appointment;
