import { FormEvent, useContext } from "react";
import { AutoLogin } from "./AutoLogin";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";

export default function UpdateProfile() {
  const navigate = useNavigate();
  AutoLogin();
  const userContext = useContext(UserContext);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const newUser = {
      _id: userContext.email,
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      phone: data.get("phone"),
    };
    console.log(newUser);
    const results = await fetch("http://localhost:5000/updateUser", {
      method: "put",
      body: JSON.stringify(newUser),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (results.status >= 200 && results.status <= 299) {
      const token = await results.json();
      console.log(token)
      userContext.setFirstName(token.firstName);
      userContext.setLastName(token.lastName);
      navigate("/Profile");

    } else if (results.status >= 400 && results.status <= 499) {
      alert(
        `Verify username or password. Do you already have an account? ${results.status}`
      );
    } else {
      alert(
        `You were not able to create an account. Status code: ${results.status}`
      );
    }
  };

  return (
    <>
      <div className="flex flex-col bg-white text-left p-4 mx-4 mt-4 rounded-sm border border-gray-500">
        <form onSubmit={handleSubmit} action="post" className="mt-6">
          <input
            className="w-full p-3.5 bg-white border border-gray-400 rounded-[4px] placeholder-gray-700 text-black mb-4"
            name="firstName"
            id="firstName"
            placeholder={userContext.firstName ? userContext.firstName : "First Name"}
            type="text"
            autoFocus
          />
          <input
            className="w-full p-3.5 bg-white border border-gray-400 rounded-[4px] placeholder-gray-700 text-black mb-4"
            id="lastName"
            placeholder={userContext.lastName ? userContext.lastName : "Last Name"}
            name="lastName"
            type="text"
          />
          <input
            className="w-full p-3.5 bg-white border border-gray-400 rounded-[4px] placeholder-gray-700 text-black mb-4"
            id="phone"
            placeholder={userContext.phone ? userContext.phone : "Phone Number"}
            name="phone"
          />
          {/* <input
            className="w-full p-3.5 bg-white border border-gray-400 rounded-[4px] placeholder-gray-700 text-black mb-4"
            name="email"
            placeholder={userContext.email}
            required
            type="email"
            id="email"
            pattern="^.*@.*\.com$"
          /> */}
          <div className="text-blue-700 mb-3 mt-1 hover:text-blue-900">
            Reset Password
          </div>

          <div className="flex place-content-end gap-x-4">
            <button className="bg-blue-600 text-white rounded-md p-1 px-1.5 shadow-md">
              Update
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
