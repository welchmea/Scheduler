import "./App.css";
import { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Home = lazy(() => import('./views/Home'));
const ContactPage = lazy(() => import('./views/ContactPage'));
const Services = lazy(() => import('./views/Service'));
const Appointment = lazy(() => import('./views/Appointment'));
const Login = lazy(() => import('./views/Login'));
const Admin = lazy(() => import('./views/Admin'));
const Signup = lazy(() => import('./views/Signup'));
const Profile = lazy(() => import('./views/Profile'));
const Sidebar = lazy(() => import('./components/Sidebar'));


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
            <Route path="/Signup" element={<Signup/> } />
            <Route path="/Appointment" element={<Appointment/>} />
            <Route path="/Admin" element={<Admin />} />
            <Route path="/Profile" element={<Profile />} />
          </Routes>
          </UserContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
