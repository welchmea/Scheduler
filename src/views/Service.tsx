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

      <section className="container border flex h-screen items-center place-content-center m-auto mb-12 bg-fixed bg-center bg-cover bg-[url('./assets/images/patrick-langwallner-3pR7d-tIRx8-unsplash.jpg')]">
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

      {/* <div className="flex flex-col place-content-center items-center bg-white sm:h-[70vh] md:h-[80vh] lg:h-[100vh] p-8 text-black gap-y-4">
          <h2>SERVICES</h2>
          <p>
            From advanced colour techniques like balayage and colour correction
            to precision cuts, and textured styles, we can fulfill any hair
            vision.
          </p>
          <div className="flex flex-row flex-wrap gap-x-2 gap-y-2 text-white place-content-center">
            <div className="bg-black rounded-md p-2 w-1/4">CUTS</div>
            <div className="bg-black rounded-md p-2 w-1/4">COLOR</div>
            <div className="bg-black rounded-md p-2 w-1/4">
              STYLING AND TREATMENTS
            </div>
          </div>

          <div className="flex transition delay-50 duration-300 ease-in-out transform hover:scale-110 mt-8">
            <Link to="/Appointment">Appointment</Link>
          </div>
        </div>

        <div className="flex flex-col place-content-center bg-otherTan sm:h-[70vh] md:h-[60vh] lg:h-[60vh] text-black gap-y-4">
          <h2>CONTACT</h2>
          <div className="flex flex-row flex-wrap gap-x-2 gap-y-2 w-full place-content-center">
            <div className="flex flex-col flex-wrap items-start bg-white rounded-md h-full p-2 w-1/4">
              PHONE:
              <p>360-790-8040</p>
              EMAIL:
              <p>realmsalon @gmail.com</p>
              <div className="flex flex-wrap gap-x-2"></div>
            </div>
            <div className="flex flex-col items-start bg-white rounded-md h-full p-2 w-1/4">
              HOURS:
              <ul>Monday:9AM-2PM</ul>
              <ul>Tuesday: 9AM–2PM</ul>
              <ul>Wednesday: 9AM–2PM</ul>
              <ul>Thursday: 9AM–2PM</ul>
              <ul>Friday, Saturday, & Sunday: Closed</ul>
            </div>
            <div className="flex flex-col items-start bg-white rounded-md h-full p-2 w-1/4 gap-y-4">
              ADDRESS:
              <p className="flex text-sm">
                1804 Boulevard Rd SE, Olympia, Washington 98501
              </p>
            </div>
          </div>
        </div> */}
      {/* </div>  */}
      {/* <div className="bg-[url('./assets/images/sumner-mahaffey-7Y0NshQLohk-unsplash.jpg')] h-[100vh] bg-cover bg-right"></div>
      <div className="flex w-full z-10 absolute mt-48 justify-center text-black">
        <div className="flex flex-col border border-black rounded-md w-5/6 p-8 bg-white">
          <h1 className="flex text-2xl w-full bg-calendarBG border border-black rounded-md p-4 mb-1">Services Offered: </h1>
          <div className="flex flex-row justify-between gap-x-2">
            <div className="flex flex-col w-1/3 text-xl">
              <div className="flex border border-black bg-calendarBG p-4 rounded-md mb-1">
              <h2 className="text-2xl">Cuts</h2>
                </div>
              <div className="w-full p-3 bg-calendarBG border border-black rounded-md h-full">
              {cuts.map((key) => (
                <ul className="flex justify-between p-4">
                  <div className="flex">{key.service}</div>
                  <div className="flex">{"$ " + key.price + ".00"}</div>
                </ul>
              ))}
              </div>
            </div>
            <div className="flex flex-col w-1/3 text-xl">
            <div className="flex border border-black bg-calendarBG p-4 rounded-md mb-1">
              <h2 className="text-2xl">Color</h2>
                </div>

            </div>
            <div className="flex flex-col w-1/3 text-xl">
            <div className="flex border border-black bg-calendarBG p-4 rounded-md mb-1">
              <h2 className="text-2xl">Styling and Treatments</h2>
                </div>

            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
export default Services;
