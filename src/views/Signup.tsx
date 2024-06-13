import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import { UserContext } from "../contexts/UserContext";

export default function Signup() {


  const userContext = React.useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const newUser = {
      _id: data.get("email"),
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      phone: data.get("phone"),
      password: data.get("password"),
    };
    const results = await fetch("http://localhost:5000/createUser", {
      method: "post",
      credentials: "include",
      body: JSON.stringify(newUser),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (results.status >= 200 && results.status <= 299) {
      let token = await results.json()
      userContext.setFirstName(token.user.firstName)
      userContext.setLastName(token.user.lastName)
      userContext.setEmail(token.user._id)
      userContext.setPhone(token.user.phone)
      navigate("/");
    }
    else if (results.status >= 400 && results.status <= 499) {
      alert(
        `Verify username or password. Do you already have an account? ${results.status}`
      );
      }
    else {
      alert(
        `You were not able to create an account. Status code: ${results.status}`
      );
    }
  };

  return (
    <>
      <div className="flex flex-row flex-wrap h-screen w-full">
        <Container component="main" maxWidth="sm">
          <div className="flex flex-col items-center bg-white p-3 rounded-md mt-16 mb-16 ">
            <div className="m-1 bg-black text-white p-2.5 rounded-3xl">
              <LockOutlinedIcon />
            </div>
            <div className="italic text-black">Realm Salon</div>
            <form onSubmit={handleSubmit} action="post" className="mt-6">
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <input
                    className="w-full p-3.5 bg-white border border-gray-400 rounded-[4px] placeholder-gray-700 text-black"
                    name="firstName"
                    id="firstName"
                    placeholder="First Name"
                    type="text"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <input
                    className="w-full p-3.5 bg-white border border-gray-400 rounded-[4px] placeholder-gray-700 text-black"
                    id="lastName"
                    placeholder="Last Name"
                    name="lastName"
                    type="text"
                  />
                </Grid>
                <Grid item xs={12}>
                  <input
                    className="w-full p-3.5 bg-white border border-gray-400 rounded-[4px] placeholder-gray-700 text-black"
                    id="phone"
                    placeholder="Phone Number"
                    name="phone"
                  />
                </Grid>
                <Grid item xs={12}>
                  <input
                    className="w-full p-3.5 bg-white border border-gray-400 rounded-[4px] placeholder-gray-700 text-black"
                    name="email"
                    placeholder="Email Address *"
                    required
                    type="email"
                    id="email"
                    /* ?= look ahead, .* any character specific in the brackets {8,30} contains 8+  */
                    // pattern="^(?=.*[a-zA-Z0-9])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_]).{8,}[a-zA-Z]+\.com$"
                  />
                </Grid>
                <Grid item xs={12}>
                  <input
                    className="w-full p-3.5 bg-white border border-gray-400 rounded-[4px] mb-4 placeholder-gray-700 text-black"
                    name="password"
                    placeholder="Password *"
                    required
                    type="password"
                    id="password"
                  />
                </Grid>
              </Grid>
              <button
                type="submit"
                className="w-full mt-3 mb-2 bg-blue-500  text-white rounded-[4px] shadow-md shadow-gray-500 p-1.5 hover:bg-blue-600"
              >
                SIGNUP
              </button>
              <div className="text-black mt-4 mb-2">
                {" "}
                Go Back to Login!{" "}
                <Link to="/Login" className="underline italic text-blue-600">
                  Click here!
                </Link>
              </div>
            </form>
          </div>
        </Container>
      </div>
    </>
  );
}
