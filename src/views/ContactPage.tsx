import Contact from "../components/Contact";
import MapView from "../components/Map";
import { AutoLogin } from "../components/AutoLogin";
import EmailForm from "../components/Email";

function ContactPage() {
  AutoLogin();

  return (
    <>
      <header className="flex items-center justify-center h-screen bg-fixed bg-center bg-cover bg-[url('./assets/images/averie-woodard-4nulm-JUYFo-unsplash.webp')]">
        <div className="border flex place-content-center items-center text-black p-4 text-2xl bg-calendarBG bg-opacity-60 w-full h-1/3">
          Contact
        </div>
      </header>

      <section className="flex flex-col m-auto bg-fixed bg-center bg-cover bg-[url('./assets/images/averie-woodard-4nulm-JUYFo-unsplash.webp')]">
        <div className="p-4 text-2xl bg-calendarBG bg-opacity-50 rounded-t-md">
          CONTACT INFORMATION
        </div>
        <div className="flex flex-col gap-y-4 place-content-center text-black h-full p-3 bg-calendarBG rounded-b-md mb-4">
          <Contact />
        </div>
      </section>
      <section className="flex flex-col items-center m-auto bg-fixed bg-center bg-cover bg-[url('./assets/images/averie-woodard-4nulm-JUYFo-unsplash.webp')]">
        <div className="p-4 text-2xl bg-calendarBG bg-opacity-50 w-full rounded-t-md">
          EMAIL
        </div>
        <EmailForm/>
      </section>
      <section className="flex flex-col items-end m-auto bg-fixed bg-center bg-cover bg-[url('./assets/images/averie-woodard-4nulm-JUYFo-unsplash.webp')]">
        <div className="p-4 text-2xl bg-calendarBG bg-opacity-50 w-full rounded-t-md">
          MAP
        </div>
        <div className="flex flex-col gap-y-4 place-content-center text-black h-full w-full p-3 bg-calendarBG rounded-b-md mb-4">
          <MapView />
        </div>
      </section>
    </>
  );
}
export default ContactPage;
