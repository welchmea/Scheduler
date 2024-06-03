import "./App.css";
import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Home = lazy(() => import("./views/Home"));
const ContactPage = lazy(() => import("./views/ContactPage"));
const Services = lazy(() => import("./views/Service"));
const Appointment = lazy(() => import("./views/Appointment"));
const Login = lazy(() => import("./views/Login"));
const Admin = lazy(() => import("./views/Admin"));
const Signup = lazy(() => import("./views/Signup"));
const Profile = lazy(() => import("./views/Profile"));
const Sidebar = lazy(() => import("./components/Sidebar"));
const Products = lazy(() => import("./views/Products"));
const UpdateProfile = lazy(() => import("./components/UpdateProfile"));

import { UserContextProvider } from "./contexts/UserContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <UserContextProvider>
          <Suspense fallback={<Loading />}>
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
          </Suspense>
        </UserContextProvider>
      </BrowserRouter>
    </>
  );
}
function Loading() {
  return <h2>🌀 Loading...</h2>;
}

export default App;
