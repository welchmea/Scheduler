import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

function Header() {
  const userContext = useContext(UserContext);
  console.log(userContext)
  return (
    <>
      <div className="bg-[url('./assets/images/phil-5i0GnoTTjSE-unsplash.jpg')] h-[50vh] bg-cover flex flex-col items-start place-content-center p-4 text-black bg-center">
        <h1 className="text-4xl">Realm Salon</h1>
        <div className="flex flex-row items-center gap-x-2">
          {userContext.username ? (
            `Hello, ${userContext.username}`
          ) : (
            <Link to="/Login">
              <button className="flex transition delay-50 duration-300 ease-in-out transform hover:scale-110 border border-black rounded-md p-2 rounded-md hover:bg-transparent bg-white">
                Login
              </button>
            </Link>
          )}

          <Link to="/Appointment">
            <button className="flex transition delay-50 duration-300 ease-in-out transform hover:scale-110 border border-black rounded-md p-2 rounded-md hover:bg-transparent bg-white">
              Make Appointment
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
export default Header;
