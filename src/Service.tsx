import Sidebar from "./Sidebar";
import Photo from "./assets/images/giorgio-trovato-qrz6s4yDcIM-unsplash.jpg";

function Services() {
  return (
    <>
      <img className="filter brightness-50 absolute" src={Photo} alt="home-page" />
    <div className="flex flex-wrap w-full h-1/6 p-4 filter text-white absolute">
        <Sidebar/>
        </div>
        <div className="flex justify-center mt-28">
        <div className="flex items-center justify-center z-10 bg-whiteish opacity-45 w-5/6 text-black h-[80vh]">
          {/* <img src={Photo}/> */}
        Phone: 360-790-8040
        </div>
        </div>
      {/* <div className="flex flex-wrap bg-salmon p-4 mx-4">
        <div className="flex flex-row border bg-sage w-full justify-between shadow-lg">
          <div className="flex bg-blueGrey p-16 text-xl italic items-center">
            Services
          </div>
          <div className="flex border-l">
            <div className="flex p-2">
              <img src={Photo}></img>
            </div>
          </div>
        </div>
      </div>
      <div className="flex bg-salmon p-4 mx-4 mt-4">
        <div className="flex p-4 bg-otherTan w-full">
          <div className="flex flex-col bg-whiteish w-full text-black">
            <div className="flex">Cut:</div>
            <div className="flex">Color:</div>
            <div className="flex">Blowout:</div>
          </div>
        </div>
      </div> */}
    </>
  );
}
export default Services;
