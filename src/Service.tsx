import Sidebar from "./Sidebar";
import Photo from "./assets/images/giorgio-trovato-qrz6s4yDcIM-unsplash.jpg";

function Services() {
  return (
    <>
      <img
        className="filter brightness-50 absolute"
        src={Photo}
        alt="home-page"
      />
      <div className="flex flex-wrap w-full h-1/6 p-4 filter text-white absolute">
        <Sidebar />
      </div>
      <div className="flex justify-center mt-28">
        <div className="flex items-center justify-center z-10 bg-backgroundCard opacity-45 w-5/6 text-black h-[80vh]">
          
        </div>
      </div>
    </>
  );
}
export default Services;
