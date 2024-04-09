import Photo from "./assets/images/images-2.jpeg";
import "react-calendar/dist/Calendar.css";
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
  ];
  return (
    <>
      <div className="flex flex-wrap bg-salmon p-4 mx-4">
        <div className="flex flex-row bg-whiteish w-full justify-between shadow-lg">
          <div className="flex bg-blueGrey p-16 text-xl italic items-center">
            Make an Appointment
          </div>
          <div className="flex border-l">
            <div className="flex p-2">
              <img src={Photo}></img>
            </div>
          </div>
        </div>
      </div>
      <div className="flex bg-salmon p-2 mx-4 mt-4">
        <div className="flex p-2 bg-otherTan w-full">
          <div className="flex flex-wrap bg-whiteish w-full text-black justify-between">
            <div className="flex flex-col justify-between">
              <div className="flex mt-8 sm:ml-8">
                <Dropdown className="w-[30vh] text-left shadow-xl" options={options} />
              </div>
            </div>
            <div className="flex flex-col mt-8 mb-8 ml-8 text-left border p-3 text-md border-gray-300 bg-white shadow-xl">
              <label className="flex border border-gray-300 p-3">What do you want your stylist to know...</label>
              <textarea className="flex bg-white border border-gray-300 w-[60vh] sm:w-[40vh] h-full p-3"></textarea>
            </div>
            <div className="mt-8 mb-8 sm:ml-8 shadow-lg">
              <Calendar />
            </div>
            <div className="flex mb-8 mr-8 sm:ml-8 items-end">
                <button className="italic border border-blueGrey p-2 text-xs w-[30vh] bg-blueGrey text-white">
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
