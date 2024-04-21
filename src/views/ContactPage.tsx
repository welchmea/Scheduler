import Contact from "../components/Contact";
import Map from "../components/Map";

function ContactPage () {
    return (
        <>
        <div className="h-screen text-black flex flex-col items-center place-content-center gap-y-4">
            <h1 className="text-white text-2xl">Contact Page</h1>
            <div className="flex w-5/6 bg-white">
            <Contact/>
            </div>
            
            <div className="w-5/6">
            <Map/>
            </div>
        </div>
        </>
    )
}
export default ContactPage;