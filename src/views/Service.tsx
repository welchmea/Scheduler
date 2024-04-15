import {cuts, color, styling } from '../assets/data/data'; 

function Services() {
  return (
    <>
      <div className="bg-[url('./assets/images/sumner-mahaffey-7Y0NshQLohk-unsplash.jpg')] h-[100vh] bg-cover bg-right"></div>
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
              <div className="w-full p-3 bg-calendarBG border border-black rounded-md h-full">
              {color.map((key) => (
                <ul className="flex justify-between p-4">
                  <div className="flex">{key.service}</div>
                  <div className="flex">{"$ " + key.price + ".00"}</div>
                </ul>
              ))}
              </div>
            </div>
            <div className="flex flex-col w-1/3 text-xl">
            <div className="flex border border-black bg-calendarBG p-4 rounded-md mb-1">
              <h2 className="text-2xl">Styling and Treatments</h2>
                </div>
              <div className="w-full p-3 bg-calendarBG border border-black rounded-md h-full">
              {styling.map((key) => (
                <ul className="flex justify-between p-4">
                  <div className="flex">{key.service}</div>
                  <div className="flex">{"$ " + key.price + ".00"}</div>
                </ul>
              ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Services;
