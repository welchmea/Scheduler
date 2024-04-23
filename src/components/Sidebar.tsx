import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <div className="flex flex-row flex-wrap items-center text-black justify-between p-2 border bg-calendarBG">
        <div className="flex border border-black rounded-md p-2">R+S</div>
        <div className="flex flex-wrap gap-x-10 items-center">
          <div className="flex transition delay-50 duration-300 ease-in-out transform hover:scale-110">
            <Link to="/">Home</Link>
          </div>
          <div className="flex transition delay-50 duration-300 ease-in-out transform hover:scale-110">
            <Link to="/Services">Services</Link>
          </div>
          <div className="flex transition delay-50 duration-300 ease-in-out transform hover:scale-110">
            <Link to="/ContactPage">Contact</Link>
          </div>
          <div className="flex transition delay-50 duration-300 ease-in-out transform hover:scale-110">
            <Link to="/Login">Login
            </Link>
          </div>
          <div className="flex transition delay-50 duration-300 ease-in-out transform hover:scale-110">
            <Link to="/Appointment">Appointment
            </Link>
          </div>
          <div className="flex transition delay-50 duration-300 ease-in-out transform hover:scale-110">
            <Link to="/Admin">Admin
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default Sidebar;
