import React, { useState } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function EmailForm() {
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
      <div className="flex flex-col gap-y-4 place-content-center text-black h-full w-full p-3 bg-calendarBG rounded-b-md mb-4">
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
                pattern="^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"
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
    </>
  );
}
