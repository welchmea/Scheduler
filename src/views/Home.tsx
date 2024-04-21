import { Link } from "react-router-dom";
import Header from "../components/Header";
import { SocialIcon } from "react-social-icons";
import Map from "../components/Map";
import Cut from '../assets/images/michael-dagonakis-IbdgiTODqbQ-unsplash.jpg';
import Color from '../assets/images/ayo-ogunseinde-UqT55tGBqzI-unsplash.jpg';
import Style from '../assets/images/todd-trapani-7pCUY-UoIQ0-unsplash.jpg';

function Home() {
  const instagram = (
    <SocialIcon
      bgColor="black"
      url="https://www.instagram.com/realmbymel/?hl=en"
    />
  );
  const linkedin = <SocialIcon bgColor="black" url="https://linkedin.com" />;
  const facebook = <SocialIcon bgColor="black" url="https://facebook.com" />;
  const twitter = (
    <SocialIcon bgColor="black" url="https://twitter.com/?lang=e" />
  );
  return (
    <>
      <div className="h-screen">
        <Header />
        <div className="flex flex-col items-center place-content-center bg-black sm:h-[50vh] md:h-[50vh] lg:h-[50vh] gap-y-4">
          <p className="flex text-lg">
            We transform your salon experience into a tranquil and sophisticated
            retreat.
          </p>
          <p className="flex text-sm">
            Our holistic approach revitalizes both body and mind for a
            rejuvenating transformation. We customize hairstyles to uniquely
            suit you, catering to all hair types and textures. We're dedicated
            to excellence by using only the finest products like KEVIN.MURPHY,
            Redken Shades EQ, Great Lengths Extensions, Brazilian Bond Builder,
            K18, and InnerSense Organic Beauty to ensure your hair's health and
            beauty are enhanced with every visit.
          </p>
        </div>
        <div className="flex flex-col place-content-center items-center bg-white sm:h-[70vh] md:h-[80vh] lg:h-[100vh] p-8 text-black gap-y-4">
          <h2>SERVICES</h2>
          <p>
            From advanced colour techniques like balayage and colour correction
            to precision cuts, and textured styles, we can fulfill any hair
            vision.
          </p>
          <div className="flex flex-row flex-wrap gap-x-2 gap-y-2 text-white place-content-center">
            <div className="bg-black rounded-md p-2 w-1/4">CUTS
            <img src={Cut}/>
            </div>
            <div className="bg-black rounded-md p-2 w-1/4">COLOR
            <img src={Color}/>
            </div>
            <div className="bg-black rounded-md p-2 w-1/4">
              STYLING AND TREATMENTS
              <img src={Style}/>
            </div>
          </div>

          <div className="flex transition delay-50 duration-300 ease-in-out transform hover:scale-110 mt-8">
            <Link to="/Services">View Services</Link>
          </div>
        </div>

        <div className="flex flex-col place-content-center bg-otherTan sm:h-[70vh] md:h-[60vh] lg:h-[60vh] text-black gap-y-4">
          <h2>CONTACT</h2>
          <div className="flex flex-row flex-wrap gap-x-2 gap-y-2 w-full place-content-center">
            <div className="flex flex-col flex-wrap items-start bg-white rounded-md h-full p-2 w-1/4">
              PHONE:
              <p>360-790-8040</p>
              EMAIL:
              <p>realmsalon @gmail.com</p>
              <div className="flex flex-wrap gap-x-2">
                {instagram}
                {facebook}
                {linkedin}
                {twitter}
              </div>
            </div>
            <div className="flex flex-col items-start bg-white rounded-md h-full p-2 w-1/4">
              HOURS:
              <ul>Monday:9AM-2PM</ul>
              <ul>Tuesday: 9AM–2PM</ul>
              <ul>Wednesday: 9AM–2PM</ul>
              <ul>Thursday: 9AM–2PM</ul>
              <ul>Friday, Saturday, & Sunday: Closed</ul>
            </div>
            <div className="flex flex-col items-start bg-white rounded-md h-full p-2 w-1/4 gap-y-4">
              ADDRESS:
              <p className="flex text-sm">
                1804 Boulevard Rd SE, Olympia, Washington 98501
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center bg-black h-[50vh] gap-y-4">
          <Map />
        </div>
      </div>
    </>
  );
}
export default Home;
