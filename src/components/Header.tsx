import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

function Header() {

  const userContext = useContext(UserContext);
  const navigate = useNavigate();

  const handleClick = () => {
    if (userContext.appt) {
      alert("You already have an appointment!")
    }
    else {
      navigate('/Appointment')
    }
  }
  
  return (
    <>
      <div className="bg-cover bg-center bg-[url('./assets/images/phil-5i0GnoTTjSE-unsplash.jpg')] h-[50vh] flex flex-col items-start place-content-center p-4 text-black">
        <h1 className="text-4xl">Realm Salon</h1>
        <div className="flex flex-row items-center gap-x-4">
          {userContext.username ? (
            <>
              {`Hello, ${userContext.username}`}
              <button className="flex transition delay-50 duration-300 ease-in-out transform hover:scale-110 border border-black rounded-md p-2 rounded-md hover:bg-transparent bg-white" onClick={handleClick}>Appointment</button>

            </>
          ) : (
            <Link to="/Login">
              <button className="flex transition delay-50 duration-300 ease-in-out transform hover:scale-105 border border-black rounded-md p-2 rounded-md hover:bg-transparent bg-white">
                Login to make an Appointment
              </button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
export default Header;
