import Contact from "../components/Contact";
import MapView from "../components/Map";
("use client");
import React, { useState } from "react";
import { AutoLogin } from "../components/AutoLogin";

interface FormData {
  name: string;
  email: string;
  message: string;
}
function ContactPage() {
  AutoLogin();

  const [formState, setFormState] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await fetch("http://localhost:5000/sendEmail", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      alert("Your message has been sent to the stylists!");
      setFormState({ name: "", email: "", message: "" });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <header className="flex items-center justify-center h-screen bg-fixed bg-center bg-cover bg-[url('./assets/images/averie-woodard-4nulm-JUYFo-unsplash.jpg')]">
        <div className="border flex place-content-center items-center text-black p-4 text-2xl bg-calendarBG bg-opacity-60 w-full h-1/3">
          Contact
        </div>
      </header>

      <section className="flex flex-col m-auto bg-fixed bg-center bg-cover bg-[url('./assets/images/averie-woodard-4nulm-JUYFo-unsplash.jpg')]">
        <div className="p-4 text-2xl bg-calendarBG bg-opacity-50 rounded-t-md">
          CONTACT INFORMATION
        </div>
        <div className="flex flex-col gap-y-4 place-content-center text-black h-full p-3 bg-calendarBG rounded-b-md mb-4">
          <Contact />
        </div>
      </section>
      <section className="flex flex-col items-center m-auto bg-fixed bg-center bg-cover bg-[url('./assets/images/averie-woodard-4nulm-JUYFo-unsplash.jpg')]">
        <div className="p-4 text-2xl bg-calendarBG bg-opacity-50 w-full rounded-t-md">
          EMAIL
        </div>
        <div className="flex flex-col gap-y-4 place-content-center text-black h-full p-3 bg-calendarBG rounded-b-md mb-4">
          <form
            className="flex flex-wrap gap-4 justify-center text-white mb-4 mt-4"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col gap-y-4 ">
              <input
                className="rounded-md border border-slate-300 px-2 py-1 outline-white bg-[#292929]"
                type="text"
                name="name"
                value={formState.name}
                onChange={handleChange}
                placeholder="Name"
                required
              />

              <div className="flex flex-col gap-y-4">
                <input
                  className="rounded-md border border-slate-300 px-2 py-1 outline-white bg-[#292929]"
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                />
              </div>
            </div>

            <div className="flex flex-col gap-y-4">
              <textarea
                className="rounded-md border border-slate-300 outline-white text-white p-2 bg-[#292929]"
                name="message"
                value={formState.message}
                onChange={handleChange}
                placeholder="Message"
                rows={6}
                required
              />

              <button
                className="rounded-md bg-[#292929] text-white px-2 py-1 block"
                type="submit"
              >
                Submit
              </button>
            </div>

            <div className="flex w-1/3 place-content-center text-black">
              <p>
                We'd love to hear from you. Send your comments, concerns, or
                praises.
              </p>
            </div>
          </form>
        </div>
      </section>
      <section className="flex flex-col items-end m-auto bg-fixed bg-center bg-cover bg-[url('./assets/images/averie-woodard-4nulm-JUYFo-unsplash.jpg')]">
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
