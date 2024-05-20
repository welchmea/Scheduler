import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import HeaderButtonStyle from "./HeaderButton";

function Header() {

  const userContext = useContext(UserContext);
  return (
    <>
      <div className="h-screen bg-fixed bg-cover bg-right-bottom bg-[url('./assets/images/george-bohunicky-qJKT2rMU0VU-unsplash.jpg')] h-[50vh] flex flex-col items-start place-content-center p-4 text-black">
        <h1 className="text-4xl">Salon Services</h1>
        <div className="flex flex-row items-center gap-x-4">
          {userContext.email ? (
            <>
              Welcome Back!
             <Link to='/Services'><HeaderButtonStyle title="Appointment" /></Link>

            </>
          ) : (
            <Link to="/Login">
             <HeaderButtonStyle title="Login to Make Appointment" />
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
export default Header;
