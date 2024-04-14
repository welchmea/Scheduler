import Photo from "../assets/images/profile-photo.JPG";
import { SocialIcon } from "react-social-icons";

function Contact() {
  const instagram = (
    <SocialIcon url="https://www.instagram.com/realmbymel/?hl=en" />
  )
  const linkedin = <SocialIcon url="https://linkedin.com" />
  const facebook = <SocialIcon url="https://facebook.com" />
  const twitter = <SocialIcon url="https://twitter.com/?lang=e"/>

  return (
    <>
      <div className="bg-[url('./assets/images/patrick-langwallner-3pR7d-tIRx8-unsplash.jpg')] h-full w-full bg-cover bg-right"></div>
      <div className="flex flex-wrap z-2 p-2 w-full gap-x-2 mt-48 items-start justify-center absolute text-black h-5/6">
        <div className="flex border border-black bg-calendarBG rounded-md p-8 h-5/6">
          <img className="flex border border-black rounded-md" src={Photo} />
        </div>
        <div className="flex flex-col gap-y-1 border border-black bg-calendarBG rounded-md h-5/6 p-8">
          <div className="flex flex-col bg p-4 items-center place-content-center justify-around text-2xl rounded-md h-full border border-black">
            <label >Stylist/Owner:</label>
              <p className="italic"> Melissa McGill</p>
            <label >About Me:</label>
              <p className="italic">
                "Stylist for 10 years. Specializes in dynamic point hair cuts,
                color correction, and blonding."
              </p>
          </div>

          <div className="border border-black p-4 rounded-md bg-calendarBG">
            Phone: 360-790-8040
          </div>
          <div className="flex flex-col bg-calendarBG border border-black p-4 rounded-md gap-y-4">
            <label className="">Connect with me:</label>
            <div className="flex place-content-center gap-x-8">
              {instagram}
              {facebook}
              {linkedin}
              {twitter}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Contact;
