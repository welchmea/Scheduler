import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Sidebar from "./Sidebar";
import Contact from "./Contact";
import Services from "./Service";
import Appointment from "./Appointment";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="flex h-screen overflow-hidden">
          {/* <div className="flex h-screen overflow-hidden">
            <Sidebar/>
          </div> */}
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
