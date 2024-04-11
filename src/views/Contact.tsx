import Photo from "../assets/images/profile-photo.JPG";
import { SocialIcon } from "react-social-icons";

function Contact() {
  const instagram = (
    <SocialIcon url="https://www.instagram.com/realmbymel/?hl=en" />
  );
  const facebook = <SocialIcon url="https://facebook.com" />;

  return (
    <>
      <div className="bg-[url('./assets/images/giorgio-trovato-ldC8xP2Z9lo-unsplash.jpg')] h-[100vh] bg-cover"></div>

      <div className="flex flex-row z-10 w-full h-5/6 mt-48 place-content-center fixed">
        <div className="flex flex-wrap border border-white justify-center place-content-center bg-backgroundCard rounded-md gap-x-8">
          <div className="flex bg-calendarBG p-12 rounded-md h-5/6 items-center">
            <img
              className="flex h-[60vh] border border-white rounded-md"
              src={Photo}
            />
          </div>

          <div className="flex flex-col bg-calendarBG rounded-md text-black gap-y-1 text-xl w-1/4 p-4">
            <div className="flex flex-col items-center rounded-md p-4 bg-white gap-y-4">
              <label className="flex">Stylist/Owner:</label>
              <p className="flex italic"> Melissa McGill</p>
              <label className="flex">About Me:</label>
              <div className="italic">
                "Stylist for 10 years. Specializes in dynamic point hair cuts,
                color correction, and blonding."
              </div>
            </div>

            <div className="border border-white p-4 rounded-md bg-white">
              Phone: 360-790-8040
            </div>
            <div className="flex flex-col bg-white p-4 rounded-md gap-y-4">
              <label className="">Connect with me:</label>
              <div className="flex place-content-center gap-x-8">
                {instagram}
                {facebook}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Contact;
