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
  const [token, setToken] = useState('');
  const [username, setUsername] = useState("Meagan");
  return (
    <>
      <BrowserRouter>
          <Sidebar token={token} username={username} />
          <Routes>
            <Route path="/" element={<Home username={username} />} />
            <Route path="/ContactPage" element={<ContactPage />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/Login" element={<Login setToken={setToken} setUsername={setUsername}/>} />
            <Route path="/Signup" element={<Signup  setToken={setToken} setUsername={setUsername}/>} />
            <Route path="/Appointment" element={<Appointment token={token} />} />
            <Route path="/Admin" element={<Admin />} />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
