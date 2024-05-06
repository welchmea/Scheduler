import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import * as React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

export default function Login() {
  const userContext = React.useContext(UserContext);
  const navigate = useNavigate();
  let {state} = useLocation();


  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const newUser = {
      _id: data.get("email"),
      password: data.get("password"),
    };
    const results = await fetch(`http://localhost:5000/checkUser`, {
      method: "post",
      body: JSON.stringify(newUser),
      headers: {
        "Content-Type": "application/json",
      },
    })

    if (results.status == 201 || results.status == 200) {  
      let token = await results.json()
      userContext.setUsername(token.firstName + ' ' + token.lastName)
      userContext.setEmail(token._id)
      
      // direct to HomePage or Appointment page if navigating from 
      // the Services view
      if (state) {
        navigate('/Appointment', {state: state});
      }
      else navigate('/');

    } 
    else if (results.status == 400 || results.status == 401) {
      alert(
        `Wrong Password. Try again`
      );
    }
  };

    React.useEffect(() => {
      async function autoLogin() {
        const response = await fetch("http://localhost:5000/autoLogin", {
          method: "GET",
          credentials: "include",
        });
        if (response.status === 200) {
          // navigate("/");
          console.log("continued session")
        } else {
          console.log("not signed in or not valid")
          // navigate("/");
        }
      }
      autoLogin();
    }, []);

  return (
    <>
      <div className="flex flex-row flex-wrap h-screen w-full">
        <Container component="main" maxWidth="sm">
        <div className="flex flex-col items-center bg-white p-2 rounded-md mt-16 mb-16 "
        >
            <div className="m-1 bg-black text-white p-2.5 rounded-3xl">
              <LockOutlinedIcon />
            </div>
            <div className="italic text-black">Realm Salon</div>
              <form onSubmit={handleSubmit} action="post" className="mt-6">
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <input
                      // onChange={(e) => setUser(e.target.value)}
                      className="w-full p-3.5 bg-white border border-gray-400 rounded-[4px] placeholder-gray-700 text-black"
                      name="email"
                      placeholder="Email Address *"
                      required
                      type="email"
                      id="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <input
                    //  onChange={(e) => setPwd(e.target.value)}
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
                  LOGIN
                </button>
                <div className="text-blue-700 mb-3 mt-1 hover:text-blue-900">
                  Reset Password
                </div>
                <div className="text-black">
                  {" "}
                  Don't have an account yet?{" "}
                  <Link
                    to="/Signup"
                    className="underline italic text-blue-600"
                  >
                    Join now!
                  </Link>
                </div>
              </form>
              </div>
        </Container>
      </div>
    </>
  );
}
