import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Sidebar from "./components/Sidebar";
import Contact from "./views/Contact";
import Services from "./views/Service";
import Appointment from "./views/Appointment";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="flex h-screen overflow-hidden">
        <div className="flex flex-wrap text-xl w-full h-1/6 p-4 filter text-black absolute z-3">
        <Sidebar />
      </div>
          <div className="flex h-screen overflow-hidden w-full">
            <div className="flex flex-col flex-grow overflow-y-auto w-full h-full">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Contact" element={<Contact/>}/>
                <Route path="/Services" element={<Services/>}/>
                <Route path='/Appointment' element={<Appointment/>}/>
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
