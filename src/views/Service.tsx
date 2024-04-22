import { Link } from "react-router-dom";
import { cuts, color, styling } from "../assets/data/data";

function Services() {
  return (
    <>
      <header className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover bg-[url('./assets/images/patrick-langwallner-3pR7d-tIRx8-unsplash.jpg')]">
        <div className="p-4 text-2xl text-white bg-calendarBG bg-opacity-60 rounded-md">
          Services
        </div>
      </header>

      <section className="container border flex h-screen items-center place-content-center m-auto mb-12 bg-fixed bg-center bg-cover bg-[url('./assets/images/patrick-langwallner-3pR7d-tIRx8-unsplash.jpg')]">
        <div className="p-4 text-2xl text-white bg-calendarBG bg-opacity-50 h-full">
          Cuts
        </div>
        <div className="flex flex-col gap-y-4 place-content-center text-black h-full w-2/3 p-3 bg-calendarBG">
          {cuts.map((key) => (
            <ul className="flex justify-between p-4">
              <div className="flex">{key.service}</div>
              <div className="flex">{"$ " + key.price + ".00"}</div>
            </ul>
          ))}
        </div>
        <div className="ml-12 p-4 bg-calendarBG bg-opacity-50 rounded-md">
          <Link to="/Appointment">Make an Appointment</Link>
        </div>
      </section>
      <section className="container border flex justify-end items-center h-screen m-auto mb-12 bg-fixed bg-center bg-cover bg-[url('./assets/images/patrick-langwallner-3pR7d-tIRx8-unsplash.jpg')]">
      <div className="flex mr-12 p-4 bg-calendarBG bg-opacity-50 rounded-md">
          <Link to="/Appointment">Make an Appointment</Link>
        </div>
        <div className="p-4 text-2xl text-white bg-calendarBG bg-opacity-50 h-full">
          Styling
        </div>
        <div className="flex flex-col gap-y-4 place-content-center text-black h-full w-2/3 p-3 bg-calendarBG">
          {styling.map((key) => (
            <ul className="flex justify-between p-4">
              <div className="flex">{key.service}</div>
              <div className="flex">{"$ " + key.price + ".00"}</div>
            </ul>
          ))}
        </div>
      </section>

      <section className="container border flex h-screen items-center place-content-center m-auto bg-fixed bg-center bg-cover bg-[url('./assets/images/patrick-langwallner-3pR7d-tIRx8-unsplash.jpg')]">
        <div className="p-4 text-2xl text-white bg-calendarBG bg-opacity-50 h-full">
          Color
        </div>
        <div className="flex flex-col gap-y-4 place-content-center text-black h-full w-2/3 p-3 bg-calendarBG">
          {color.map((key) => (
            <ul className="flex justify-between p-4">
              <div className="flex">{key.service}</div>
              <div className="flex">{"$ " + key.price + ".00"}</div>
            </ul>
          ))}
        </div>
        <div className="flex ml-12 p-4 bg-calendarBG bg-opacity-50 rounded-md">
          <Link to="/Appointment">Make an Appointment</Link>
        </div>
        </section>
    </>
  );
}
export default Services;
