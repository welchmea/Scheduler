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

function App() {
  const [token, setToken] = useState();
  return (
    <>
      <BrowserRouter>
        <Sidebar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/ContactPage" element={<ContactPage/>}/>
                <Route path="/Services" element={<Services/>}/>
                <Route path="/Login" element={<Login/>}/>
                <Route path="/Signup" element={<Signup/>}/>
                <Route path='/Appointment' element={<Appointment/>}/> 
                <Route path='/Admin' element={<Admin/>}/> 
              </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
