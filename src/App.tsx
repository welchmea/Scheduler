import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Sidebar from "./components/Sidebar";
import Contact from "./views/Contact";
import Services from "./views/Service";
import Appointment from "./views/Appointment";
import Login from "./views/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Sidebar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Contact" element={<Contact/>}/>
                <Route path="/Services" element={<Services/>}/>
                <Route path="/Login" element={<Login/>}/>
                <Route path='/Appointment' element={<Appointment/>}/> 
              </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
