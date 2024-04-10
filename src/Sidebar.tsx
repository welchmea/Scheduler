import { Link } from "react-router-dom";

function Sidebar () {
    return (
        <>
        <div className="flex flex-row items-center w-full justify-between">
            <div className="flex mr-8 border p-4">
                R+S
            </div>
            <div className="flex flex-row gap-x-10 items-center">
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
                <div className="flex">
                    <Link to='/Appointment'>
                    <button className="flex p-2 rounded-md text-sm">Make Appointment</button>
                    </Link>
                </div>
            </div>
        </div>
        </>
    )
}
export default Sidebar;