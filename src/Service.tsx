import Photo from "./assets/images/succulent.jpeg";

function Services() {
  return (
    <>
      <div className="flex flex-wrap bg-salmon p-4 mx-4">
        <div className="flex flex-row border bg-sage w-full justify-between shadow-lg">
          <div className="flex bg-blueGrey p-16 text-xl italic items-center">
            Services
          </div>
          <div className="flex border-l">
            <div className="flex p-2">
              <img src={Photo}></img>
            </div>
          </div>
        </div>
      </div>
      <div className="flex bg-salmon p-4 mx-4 mt-4">
        <div className="flex p-4 bg-otherTan w-full">
          <div className="flex flex-col bg-whiteish w-full text-black">
            <div className="flex">Cut:</div>
            <div className="flex">Color:</div>
            <div className="flex">Blowout:</div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Services;
