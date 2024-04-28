import Contact from "../components/Contact";
import Map from "../components/Map";
("use client");
import React, { useState } from "react";

interface FormState {
  name: string;
  email: string;
  message: string;
}
function ContactPage() {
  const [formState, setFormState] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setIsSubmitting(true);
      const errors = { name: "", email: "", message: "" };

      if (formState.name === "") {
        errors.name = "Name is required";
      }

      if (formState.email === "" || !validateEmail(formState.email)) {
        errors.email = "Valid email is required";
      }

      if (formState.message === "") {
        errors.message = "Message is required";
      }

      setErrors(errors);

      if (!errors.name && !errors.email && !errors.message) {
        await fetch("http://localhost:5000/sendEmail", {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formState),
        });
        setFormState({ name: "", email: "", message: "" });
        setIsSubmitting(false);
        alert("Your message has been sent to the stylists!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="text-black flex flex-col items-center gap-y-4 mt-4">
        <div className="flex w-5/6 bg-white justify-center">
          <Contact />
        </div>

        <div className="flex bg-white p-4 w-5/6 justify-center">
          <form className="flex flex-wrap gap-4 justify-center" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-y-4">
              <input
                className="rounded-md border-2 border-slate-300 px-2 py-1 outline-white"
                type="text"
                name="name"
                value={formState.name}
                onChange={handleChange}
                placeholder="Name"
              />
              {errors.name && (
                <p className="text-sm text-red-400">{errors.name}</p>
              )}

              <div className="flex flex-col gap-y-4">
                <input
                  className="rounded-md border-2 border-slate-300 px-2 py-1 outline-white"
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="Email"
                />
                {errors.email && (
                  <p className="text-sm text-red-400">{errors.email}</p>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-y-2">
              <textarea
                className="rounded-md border-2 border-slate-300 outline-white text-white p-2"
                name="message"
                value={formState.message}
                onChange={handleChange}
                placeholder="Message"
                rows={6}
              />
              {errors.message && (
                <p className="text-sm text-red-400">{errors.message}</p>
              )}

              <button
                className="rounded-md bg-black text-white px-2 py-1 block"
                type="submit"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div>

            <div className="flex w-1/3 place-content-center">
              <p>
                We'd love to hear from you. Send your comments, concerns, or
                praises.
              </p>
            </div>
          </form>
        </div>

        <div className="w-5/6 mb-4">
          <Map />
        </div>
      </div>
    </>
  );
}
export default ContactPage;
