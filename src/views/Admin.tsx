import { useState } from "react";

function Admin() {
  const [available, setAvailable] = useState([
    {
      //set Default
      _id: new Date().toDateString(),

      timeSlots: {
        Monday: ["9:00 AM", "10:00 AM", "12:00 PM", "2:00 PM"],
        Tuesday: ["9:00 AM", "10:00 AM", "12:00 PM", "2:00 PM"],
        Wednesday: ["9:00 AM", "10:00 AM", "12:00 PM", "2:00 PM"],
        Thursday: ["9:00 AM", "10:00 AM", "12:00 PM", "2:00 PM"],
      },
    },
  ]);

  const adding = async (data: { id: any; timeSlots: any }) => {
    const newTimeSlot = {
      _id: data.id,
      timeSlots: data.timeSlots,
    };
    const results = await fetch("http://localhost:5000/createAvailability", {
      method: "post",
      body: JSON.stringify(newTimeSlot),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (results.status === 201) {
      console.log(`You've updated your Database'!`);
    } else {
      alert(
        `Defer to the status code: ${results.status}, to determine what went wrong.`
      );
    }
  };
  const addtoDatabase = () => {
    const timeSlots = {
      Monday: ["9:00 AM", "10:00 AM", "12:00 PM", "2:00 PM"],
      Tuesday: ["9:00 AM", "10:00 AM", "12:00 PM", "2:00 PM"],
      Wednesday: ["9:00 AM", "10:00 AM", "12:00 PM", "2:00 PM"],
      Thursday: ["9:00 AM", "10:00 AM", "12:00 PM", "2:00 PM"],
    };

    let id = new Date();
    for (let l = 0; l < 30; l++) {
      let data = { id: id, timeSlots: timeSlots };
      adding(data);
      id.setDate(id.getDate() + 1);
    }
  };

  const retrieveDatabase = async () => {
    const response = await fetch("http://localhost:5000/retrieveAvailability");
    const available = await response.json();
    console.log(available);
    setAvailable(available);
  };
  //   useEffect(() => {
  //     retrieveDatabase();
  //     }, []);

  return (
    <>
      <button
        className="bg-white p-4 w-full text-black"
        onClick={addtoDatabase}
      >
        Populate Database
      </button>
      <div className="flex flex-col">
        Today's Appointments:
        {available.length > 0 &&
          available.map((i) => (
            <li>
              {i._id.valueOf()}
              <ul className=""> Monday: {i.timeSlots.Monday}</ul>
              <ul> Tuesday: {i.timeSlots.Tuesday}</ul>
              <ul> Wednesday: {i.timeSlots.Wednesday}</ul>
              <ul> Thursday: {i.timeSlots.Thursday}</ul>
            </li>
          ))}
      </div>

      <button
        className="bg-white p-4 w-full text-black"
        onClick={retrieveDatabase}
      >
        Show Entire Database
      </button>
    </>
  );
}
export default Admin;
