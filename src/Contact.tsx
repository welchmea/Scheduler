import Sidebar from "./Sidebar";
//import contact from "./assets/images/giorgio-trovato-ldC8xP2Z9lo-unsplash.jpg"
import Photo from "./assets/images/photo-profile.JPG";
import { SocialIcon } from 'react-social-icons';

function Contact() {

  const instagram = <SocialIcon url="https://www.instagram.com/realmbymel/?hl=en" />
  const facebook = <SocialIcon url="https://facebook.com" />

  return (
    <>
      <div className="bg-[url('./assets/images/giorgio-trovato-ldC8xP2Z9lo-unsplash.jpg')] h-[100vh] bg-cover"></div>
      <div className="flex flex-wrap w-full h-1/6 p-4 filter text-black absolute">
        <Sidebar />
      </div>

      <div className="flex flex-row z-10 w-full h-5/6 mt-28 items-center place-content-center absolute">
        <div className="flex flex-wrap border border-white bg-backgroundCard justify-center">
          <img className="flex h-[60vh] mt-12 mb-12" src={Photo} />
          <div className="flex flex-col bg-white mt-12 mb-12 text-black gap-y-12 place-content-center text-2xl w-1/4">
            <div className="">Stylist/Owner: Melissa McGill
              <div className="italic mt-12">
                "Stylist for 10 years. Specializes in dynamic point hair cuts, color correction, and blonding."
              </div>
            </div>

            <div>Phone: 360-790-8040</div>
            <div className="flex place-content-center gap-x-8">{instagram}{facebook}</div>


          </div>

        </div>

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
