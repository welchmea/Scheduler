import { useContext } from "react";
import { cuts, color, styling } from "../assets/data/data";
import { UserContext } from "../contexts/UserContext";

function Services() {
  const userContext = useContext(UserContext);


  return (
    <>
      <header className="flex items-center justify-center h-screen bg-fixed bg-center bg-cover bg-[url('./assets/images/curology-gqOVZDJUddw-unsplash.jpg')]">
        <div className="border flex place-content-center items-center text-black p-4 text-2xl bg-calendarBG bg-opacity-60 w-full h-1/3">
          Services
        </div>
      </header>

      <section className="flex flex-col m-auto bg-fixed bg-center bg-cover bg-[url('./assets/images/curology-gqOVZDJUddw-unsplash.jpg')]">
        <div className="p-4 text-2xl bg-calendarBG bg-opacity-50 w-2/3 rounded-t-md">
          Cuts
        </div>
        <div className="flex flex-col gap-y-4 place-content-center text-black h-full w-2/3 p-3 bg-calendarBG rounded-b-md mb-4">
          {cuts.map((key) => (
            <a href={userContext.username ? '/Appointment' : '/Login' } className="p-4 hover:text-indigo-600 border border-gray-200 shadow-md rounded-md transition ease-in-out transform hover:scale-[1.02]">
             <div className="w-full flex justify-between">
                <div className="font-bold text-md">{key.service}</div>
                <div className="font-bold text-md">{"$ " + key.price + ".00"}</div>
             </div>
          
              <div className="flex text-left italic ">{key.description}</div>
            </a>
          ))}
           
        </div>
      </section>
      <section className="flex flex-col items-center m-auto bg-fixed bg-center bg-cover bg-[url('./assets/images/curology-gqOVZDJUddw-unsplash.jpg')]">
        <div className="p-4 text-2xl bg-calendarBG bg-opacity-50 w-2/3 rounded-t-md">
          Styling
        </div>
        <div className="flex flex-col gap-y-4 text-black h-full w-2/3 p-3 bg-calendarBG rounded-b-md mb-4">
          {styling.map((key) => (
            <a href={userContext.username ? '/Appointment' : '/Login' } className="p-4 hover:text-indigo-600 border border-gray-200 shadow-md rounded-md transition ease-in-out transform hover:scale-[1.02]">
             <div className="w-full flex justify-between">
                <div className="font-bold text-md">{key.service}</div>
                <div className="font-bold text-md">{"$ " + key.price + ".00"}</div>
             </div>
          
              <div className="flex text-left italic ">{key.description}</div>
            </a>
          ))}
           
        </div>
      </section>

      <section className="flex flex-col items-end m-auto bg-fixed bg-center bg-cover bg-[url('./assets/images/curology-gqOVZDJUddw-unsplash.jpg')]">
        <div className="p-4 text-2xl bg-calendarBG bg-opacity-50 w-2/3 rounded-t-md">
          Color
        </div>
        <div className="flex flex-col gap-y-4 place-content-end text-black h-full w-2/3 p-3 bg-calendarBG rounded-b-md mb-4">
          {color.map((key) => (
            <a href={userContext.username ? '/Appointment' : '/Login' } className="p-4 hover:text-indigo-600 border border-gray-200 shadow-md rounded-md transition ease-in-out transform hover:scale-[1.02]">
             <div className="w-full flex justify-between">
                <div className="font-bold text-md">{key.service}</div>
                <div className="font-bold text-md">{"$ " + key.price + ".00"}</div>
             </div>
          
              <div className="flex text-left italic ">{key.description}</div>
            </a>
          ))}
           
        </div>
      </section>
    </>
  );
}
export default Services;
