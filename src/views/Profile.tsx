import { useContext } from "react"
import { UserContext } from "../contexts/UserContext"

export default function Profile () {
    const userContext = useContext(UserContext);
    return (
        <>
        <div className="flex flex-col h-screen">
            <div>
            Username: {userContext.username}
            </div>
            <div>
            Email: {userContext.email}
            </div>
            <div>
                Appointment: {userContext.appt}
            </div>
        </div>
        </>
    )
};