import { useContext } from "react"
import { UserContext } from "../contexts/UserContext"

export default function Profile () {
    const userContext = useContext(UserContext);
    console.log(userContext.appt)
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
                Appointment: 
                <div>
                {userContext.appt[0]}
                </div>
                <div>
                {userContext.appt[1]}
                </div>
                <div>
                {userContext.appt[2]}
                </div>
                <div>
                {userContext.appt[3]}
                </div>
            </div>
        </div>
        </>
    )
};