import { Link } from "react-router-dom";

function Sidebar () {
    return (
        <>
        <div className="p-4 bg-blueGrey">
            <div className="flex justify-center mb-8 border p-4">
                R+S
            </div>
            <div className="flex flex-col gap-y-10">
                <div>
                    <Link to='/'>
                    Home
                    </Link>
                </div>
                <div>
                    <Link to='/Services'>
                    Services
                    </Link>
                  
                </div>
                <div>
                    <Link to='/Contact'>
                    Contact
                    </Link>

                </div>
                <div className="flex justify-center">
                    <Link to='/Appointment'>
                    <button className="flex p-2 border rounded-md text-sm hover:white hover:text-black hover:bg-white">Make Appointment</button>
                    </Link>
                </div>
            </div>
        </div>
        </>
    )
}
export default Sidebar;