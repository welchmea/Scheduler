import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";

type service  = {
    id: number;
    service: string;
    price: number;
    description: string
}
export interface ServiceContent {
    map(arg0: (key: any) => import("react/jsx-runtime").JSX.Element): import("react").ReactNode;
    options?: Array<service>;
  }
  
interface ServiceProps {
    label: string;
    content: ServiceContent;
  }
  
export default function ServiceCard ({label, content}: ServiceProps) {
    const userContext = useContext(UserContext);
    return (
        <>
        <div className="p-4 text-2xl bg-calendarBG bg-opacity-50 w-2/3 rounded-t-md">
          {label}
        </div>
        <div className="flex flex-col gap-y-4 place-content-center text-black h-full w-2/3 p-3 bg-calendarBG rounded-b-md mb-4">
          {content.map((key:any) => (
            <Link key={key.id} to={userContext.email ? '/Appointment' : '/Login' } state={{ service: key.service }} className="p-4 hover:text-indigo-600 border border-gray-200 shadow-md rounded-md transition ease-in-out transform hover:scale-[1.02]">
             <div key={key.service + key.price} className="w-full flex justify-between">
                <div key={key.service}  className="font-bold text-md">{key.service}</div>
                <div key={key.price}  className="font-bold text-md">{"$ " + key.price + ".00"}</div>
             </div>
          
              <div key={key.description} className="flex text-left italic ">{key.description}</div>
            </Link>
          ))}
           
        </div>
        </>
    )
};