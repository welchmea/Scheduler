import Header from "../components/Header";

function Home() {
  return (
    <>
    <div className="bg-[url('./assets/images/adam-winger-WXmHwPcFamo-unsplash.jpg')] h-full bg-cover"></div>
    <div className='flex fixed text-black ml-4 text-8xl mt-32'>
      <Header/>
    </div> 

        {/* <div className="flex flex-row place-content-between border border-blueGrey p-2 mt-4 bg-whiteish shadow-lg">
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
        </div>  */}
    </>
  );
}
export default Home;
