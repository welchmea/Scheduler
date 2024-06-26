import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import HeaderButtonStyle from "./HeaderButton";

function Header() {

  const userContext = useContext(UserContext);
  return (
    <>
      <div className="header-img h-screen h-[50vh] flex flex-col items-start place-content-center p-4 text-black">
        <h1 className="text-4xl">Realm Salon</h1>
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
