function Admin() {
  const adding = async (data: { id:any, timeSlots: any }) => {
    const newTimeSlot = {
      _id: data.id,
      timeSlots: data.timeSlots
    };
    console.log(newTimeSlot);
    // const results = await fetch("http://localhost:5000/createAvailability" ,{
    //   method: "post",
    //   body: JSON.stringify(newTimeSlot),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });

    // if (results.status === 201) {
    //   alert(`You've updated your Database'!`);
    // } else {
    //   alert(
    //     `Defer to the status code: ${results.status}, to determine what went wrong.`
    //   );
    // }
  };
  const addtoDatabase = () => {

    const timeSlots = {
        "Monday": [
            "9:00 AM", "10:00 AM", "12:00 PM", "2:00 PM"
        ], 
        "Tuesday": [
            "9:00 AM", "10:00 AM", "12:00 PM", "2:00 PM"
        ],
         "Wednesday": [
            "9:00 AM", "10:00 AM", "12:00 PM", "2:00 PM"
         ],
         "Thursday" : [
            "9:00 AM", "10:00 AM", "12:00 PM", "2:00 PM"
         ]
    };

    let id = new Date();
    for (let l = 0; l < 30; l++) {
        let data = { id: id, timeSlots: timeSlots };
        adding(data);
        id.setDate(id.getDate() + 1);
    }
  };

  return (
    <>
      <button
        className="bg-white p-4 w-full text-black"
        onClick={addtoDatabase}
      >
        Click
      </button>
    </>
  );
}
export default Admin;
