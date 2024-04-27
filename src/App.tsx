import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Sidebar from "./components/Sidebar";
import ContactPage from "./views/ContactPage";
import Services from "./views/Service";
import Appointment from "./views/Appointment";
import Login from "./views/Login";
import Admin from "./views/Admin";
import Signup from "./views/Signup";
import { useState } from "react";
import { AuthContext } from "./views/Context";

function App() {
  // const [currentUser, setCurrentUser] = useState({ name: String });
  return (
    <>
      <BrowserRouter>
        {/* <AuthContext.Provider value={currentUser}> */}
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ContactPage" element={<ContactPage />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Appointment" element={<Appointment />} />
            <Route path="/Admin" element={<Admin />} />
          </Routes>
        {/* </AuthContext.Provider> */}
      </BrowserRouter>
    </>
  );
}

export default App;
