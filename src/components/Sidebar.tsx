import { Link } from "react-router-dom";

function Sidebar () {
    return (
        <>
        <div className="flex flex-row items-center w-full justify-between">
            <div className="flex mr-8 border-4 p-4">
                R+S
            </div>
            <div className="flex flex-row gap-x-10 items-center">
                <div className="transition delay-150 duration-300 ease-in-out transform hover:scale-110">
                    <Link to='/'>
                    Home
                    </Link>
                </div>
                <div className="transition delay-150 duration-300 ease-in-out transform hover:scale-110">
                    <Link to='/Services'>
                    Services
                    </Link>
                  
                </div>
                <div className="transition delay-150 duration-300 ease-in-out transform hover:scale-110">
                    <Link to='/Contact'>
                    Contact
                    </Link>

                </div>
                <div className="flex transition delay-150 duration-300 ease-in-out transform hover:scale-110">
                    <Link to='/Appointment'>
                    <button className="flex p-4 rounded-2xl text-xl bg-white">Make Appointment</button>
                    </Link>
                </div>
            </div>
        </div>
        </>
    )
}
export default Sidebar;