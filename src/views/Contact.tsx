import Photo from "../assets/images/profile-photo.JPG";
import { SocialIcon } from "react-social-icons";

function Contact() {
  const instagram = (
    <SocialIcon url="https://www.instagram.com/realmbymel/?hl=en" />
  );
  const facebook = <SocialIcon url="https://facebook.com" />;

  return (
    <>
      <div className="bg-[url('./assets/images/giorgio-trovato-ldC8xP2Z9lo-unsplash.jpg')] h-full w-full bg-cover"></div>

      <div className="flex flex-row z-2 p-2 w-full gap-x-10 mt-48 items-start justify-center absolute text-black h-5/6">
        <div className="flex border border-white bg-backgroundCard rounded-md p-8 h-5/6">
          <img className="flex border border-white rounded-md" src={Photo} />
        </div>

        <div className="flex flex-col gap-y-1 border border-white bg-backgroundCard rounded-md h-5/6 p-8">
          <div className="flex flex-col bg-calendarBG p-4 items-center place-content-center justify-around text-2xl rounded-md h-full">
            <label>Stylist/Owner:</label>
            <p className="italic"> Melissa McGill</p>
            <label>About Me:</label>
            <p className="italic">
              "Stylist for 10 years. Specializes in dynamic point hair cuts,
              color correction, and blonding."
            </p>
          </div>

          <div className="border border-white p-4 rounded-md bg-calendarBG">
            Phone: 360-790-8040
          </div>
          <div className="flex flex-col bg-calendarBG p-4 rounded-md gap-y-4">
            <label className="">Connect with me:</label>
            <div className="flex place-content-center gap-x-8">
              {instagram}
              {facebook}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Contact;
