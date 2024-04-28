import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";

function Sidebar() {
  const userContext = useContext(UserContext);
  console.log(userContext)
  return (
    <>
      <div className="flex flex-row flex-wrap items-center text-black justify-between p-2 border bg-calendarBG">
        <div className="flex border border-black rounded-md p-2">R+S</div>
        <div className="flex flex-wrap gap-x-10 items-center">
        <div className="flex transition delay-50 duration-300 ease-in-out transform hover:scale-110">
            {userContext.username ? `Logged In: ${userContext.username}` : <Link to="/Login">Login</Link>}
          </div>
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
            {userContext.username ? (
              <Link to="/Appointment">Appointment</Link>
            ) : (
              <Link to="/Login">Appointment</Link>
            )}
          </div>
          <div className="flex transition delay-50 duration-300 ease-in-out transform hover:scale-110">
            <Link to="/Admin">Admin</Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default Sidebar;
