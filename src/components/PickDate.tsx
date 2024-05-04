import Calendar from "react-calendar";

export default function PickDate( {date, setDate} : {date:String | null, setDate: any} ) {
  return (
    <>
      <div className="flex flex-col p-4 gap-y-2">
          <div
            id="date"
            className="flex flex-wrap border border-black rounded-md"
          >
            <Calendar defaultValue={date} onChange={setDate} />
          </div>
      </div>
    </>
  );
}
