import { cuts, color, styling } from "../assets/data/data";
import { AutoLogin } from "../components/AutoLogin";
import ServiceCard from "../components/ServiceCard";

function Services() {
  AutoLogin();

  return (
    <>
      <header className="flex items-center justify-center h-screen bg-fixed bg-center bg-cover bg-[url('./assets/images/curology-gqOVZDJUddw-unsplash.jpg')]">
        <div className="border flex place-content-center items-center text-black p-4 text-2xl bg-calendarBG bg-opacity-60 w-full h-1/3">
          Services
        </div>
      </header>

      <section className="flex flex-col m-auto bg-fixed bg-center bg-cover bg-[url('./assets/images/curology-gqOVZDJUddw-unsplash.jpg')]">
        <ServiceCard label="Cuts" content={cuts} />
      </section>
      <section className="flex flex-col items-center m-auto bg-fixed bg-center bg-cover bg-[url('./assets/images/curology-gqOVZDJUddw-unsplash.jpg')]">
        <ServiceCard label="Styling" content={styling} />
      </section>
      <section className="flex flex-col items-end m-auto bg-fixed bg-center bg-cover bg-[url('./assets/images/curology-gqOVZDJUddw-unsplash.jpg')]">
        <ServiceCard label="Color" content={color} />
      </section>
    </>
  );
}
export default Services;
