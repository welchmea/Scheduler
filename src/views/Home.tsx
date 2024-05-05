import { Link } from "react-router-dom";
import Header from "../components/Header";
import Map from "../components/Map";
import Cut from '../assets/images/michael-dagonakis-IbdgiTODqbQ-unsplash.jpg';
import Color from '../assets/images/ayo-ogunseinde-UqT55tGBqzI-unsplash.jpg';
import Style from '../assets/images/todd-trapani-7pCUY-UoIQ0-unsplash.jpg';
import Contact from "../components/Contact";


function Home() {

  return (
    <>
      <div className="h-screen">
        <Header/>
        <div className="flex flex-col items-center place-content-center bg-black sm:h-[50vh] md:h-[50vh] lg:h-[50vh] gap-y-4">
          <p className="flex text-lg text-white">
            We transform your salon experience into a tranquil and sophisticated
            retreat.
          </p>
          <p className="flex text-sm text-white">
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
        <Link to="/Services"><h2 className="transition delay-50 duration-300 ease-in-out transform hover:scale-105">SERVICES</h2></Link>
          <p>
            From advanced colour techniques like balayage and colour correction
            to precision cuts, and textured styles, we can fulfill any hair
            vision.
          </p>
          <div className="flex flex-row gap-x-2 gap-y-6 text-white place-content-center">
            <div className="bg-black rounded-md p-2 w-1/4 transition duration-300 ease-in-out transform hover:scale-105">CUTS
            <img src={Cut}/>
            </div>
            <div className="bg-black rounded-md p-2 w-1/4 transition duration-300 ease-in-out transform hover:scale-105">COLOR
            <img src={Color}/>
            </div>
            <div className="bg-black rounded-md p-2 w-1/4 transition duration-300 ease-in-out transform hover:scale-105">
              STYLING AND TREATMENTS
              <img src={Style}/>
            </div>
          </div>
        </div>

        <div className="flex flex-col place-content-center h-screen bg-fixed bg-cover bg-right-bottom bg-[url('./assets/images/george-bohunicky-qJKT2rMU0VU-unsplash.jpg')] h-[50vh] p-4 sm:h-[70vh] md:h-[60vh] lg:h-[60vh] p-8">
         <Link to='/ContactPage'><h2 className="mb-4 transition delay-50 duration-300 ease-in-out transform hover:scale-105 text-white">CONTACT</h2></Link> 
          <Contact/>
        </div>
        <div className="flex items-center bg-black h-[50vh] gap-y-4">
          <Map />
        </div>
      </div>
    </>
  );
}
export default Home;
