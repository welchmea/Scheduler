// import Photo from "./assets/images/lindsay-cash-Md_DhaFsnCQ-unsplash.jpg";
import "react-calendar/dist/Calendar.css";
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
        <Sidebar/>
        </div>
        <div className="flex flex-row p-2 w-full justify-center z-2 absolute mt-28">
          <div className="flex flex-wrap w-5/6 text-black">
            <div className="flex flex-col justify-between">
              <div className="flex mt-8 sm:ml-8">
                <Dropdown className="w-[30vh] text-left shadow-xl" options={options} />
              </div>
              <div className="flex flex-col mt-8 mb-8 ml-8 text-left border p-3 text-md border-gray-300 bg-white shadow-xl">
              <label className="flex border border-gray-300 p-3">What do you want your stylist to know...</label>
              <textarea className="flex bg-white border border-gray-300 w-[60vh] sm:w-[40vh] h-full p-3"></textarea>
            </div>
            <div className="flex mb-8 mr-8 sm:ml-8 items-end">
                <button className="transition delay-150 duration-300 ease-in-out transform hover:scale-110 text-2xl text-white">
                  Submit
                </button>
              </div>
            </div>

            <div className="mt-8 mb-8 sm:ml-8">
              <Calendar/>
            </div>
          </div>
        </div> 
    </>
  );
}
export default Appointment;
