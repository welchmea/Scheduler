import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";
import ButtonStyle from "./Button";
import HeaderButtonStyle from "./HeaderButton";

function Sidebar() {
  const userContext = useContext(UserContext);

  return (
    <>
      <div className="flex flex-row flex-wrap items-center text-black justify-between p-2 border bg-calendarBG">
        <Link to="/">
          <HeaderButtonStyle title="R+S" />
        </Link>
        <div className="flex flex-wrap gap-x-8 items-center">
          {userContext.email ? (
            <Link to="/Profile">
              {" "}
              <ButtonStyle title="Profile" />{" "}
            </Link>
          ) : (
            <Link to="/Login">
              {" "}
              <ButtonStyle title="Login" />
            </Link>
          )}
          <Link to="/Services">
            {" "}
            <ButtonStyle title="Services" />{" "}
          </Link>
          <Link to="/ContactPage">
            {" "}
            <ButtonStyle title="Contact" />{" "}
          </Link>
          {userContext.email ? (
            <Link to="/Services">
              {" "}
              <ButtonStyle title="Appointment" />{" "}
            </Link>
          ) : null}
          {userContext.isAdmin ? (
            <Link to="/Admin">
              {" "}
              <ButtonStyle title="Admin" />{" "}
            </Link>
          ) : null}
        </div>
      </div>
    </>
  );
}
export default Sidebar;
