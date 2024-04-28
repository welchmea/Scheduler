import { useState } from "react";
import Calendar from "react-calendar";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function PickDate () {
    const [date, setDate] = useState<Value>(null);
    
    return (
        <>
        <div className="flex flex-col p-4 gap-y-2">
              <label
                id="date"
                className="flex flex-col text-left border border-black bg-white p-4 rounded-md"
              >
                Appointment Scheduler: Pick a day
                <div
                  id="date"
                  className="flex flex-wrap border border-black rounded-md"
                >
                  <Calendar value={date} onChange={setDate} />
                </div>
              </label>
              </div>
        </>
    )
};