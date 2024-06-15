import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./views/Home";
import ContactPage from "./views/ContactPage";
import Services from "./views/Service";
import Appointment from "./views/Appointment";
import Login from "./views/Login";
import Admin from "./views/Admin";
import Signup from "./views/Signup";
import Profile from "./views/Profile";
import Sidebar from "./components/Sidebar";
import Products from "./views/Products";
import UpdateProfile from "./components/UpdateProfile";

import { UserContextProvider } from "./contexts/UserContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <UserContextProvider>
            <Sidebar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/ContactPage" element={<ContactPage />} />
              <Route path="/Services" element={<Services />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Signup" element={<Signup />} />
              <Route path="/Appointment" element={<Appointment />} />
              <Route path="/Admin" element={<Admin />} />
              <Route path="/Profile" element={<Profile />} />
              <Route path="/Products" element={<Products />} />
              <Route path="/UpdateProfile" element={<UpdateProfile />} />
            </Routes>
        </UserContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
