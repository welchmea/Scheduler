import Sidebar from "./Sidebar";
// import contact from "./assets/images/giorgio-trovato-ldC8xP2Z9lo-unsplash.jpg"
// const Photo = require( "./assets/images/photo-profile.JPG");

function Contact() {
  return (
    <>
       <div className="bg-[url('./assets/images/giorgio-trovato-ldC8xP2Z9lo-unsplash.jpg')] h-[100vh] bg-cover"></div>
    {/* <img className="filter brightness-50 absolute" src={contact} alt="home-page" /> */}
    <div className="flex flex-wrap w-full h-1/6 p-4 filter text-black absolute">
        <Sidebar/>
        </div>
        <div className="flex items-center justify-center opacity-55 z-10 bg-whiteish w-5/6 text-black h-[80vh] absolute mt-28 ml-28 mb-40">
          {/* <img src={Photo}/> */}
        Phone: 360-790-8040
        </div>
      {/* <div className="flex flex-wrap bg-salmon p-4 mx-4"> */}
        {/* <div className="flex flex-row bg-whiteish w-full justify-between shadow-lg"> */}
          {/* <div className="flex bg-blueGrey p-16 text-xl italic items-center">
            Contact
          </div> */}
          {/* <div className="flex border-l">
            <div className="flex p-2">
              <img src={Photo}></img>
            </div>
          </div> */}
        {/* </div> */}
      {/* </div> */}
      {/* <div className="flex h-screen bg-salmon p-4 mx-4 mt-4">
        <div className="flex p-4 bg-otherTan w-full">
          <div className="flex bg-whiteish w-full items-center text-black place-content-center ">
            Phone: 360-790-8040
          </div>
        </div>
      </div> */}
    </>
  );
}
export default Contact;
