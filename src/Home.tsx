import Flower from "./assets/images/vase-branches-neutral.jpg";
import Map from "./Map";

function Home() {
  return (
    <>
      <div className="flex flex-col container mx-auto p-4">
        <div className="flex flex-row border border-blueGrey p-2 bg-whiteish shadow-lg">
          <div className="flex w-1/3 italic place-content-left p-1 sm:text-xl md:text-2xl lg:text-2xl border border-black bg-sage">
            Realm Salon
          </div>
          <div className="flex border border-black ml-2">
          <img src={Flower}></img>
          </div>
        </div>
        <div className="flex flex-row place-content-between border border-blueGrey p-2 mt-4 bg-whiteish shadow-lg">
          <div className="flex flex-col items-left place-content-center border border-black p-1 mr-2 text-black italic w-1/4">
          <div className="flex text-black underline text-2xl p-1">
          Location
          </div>
          <div className="flex text-black p-1">
          1804 Boulevard Rd SE, Olympia, Washington 98501
          </div>

          </div>
          <div className="flex items-center w-3/4 border border-black place-content-center p-1 h-full">
            <Map />
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
