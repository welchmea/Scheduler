function Admin () {

    const adding = async (data: { day: any; time: any }) => {
        const newTimeSlot = {
          _id: Date.now(),
          day: data.day,
          time: data.time,
        };
        console.log(newTimeSlot);
        // const results = await fetch("http://localhost:5000/createAppointment" ,{
        //   method: "post",
        //   body: JSON.stringify(newTimeSlot),
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        // });
    
        // if (results.status === 201) {
        //   alert(`Your appointment is set!`);
        // } else {
        //   alert(
        //     `Defer to the status code: ${results.status}, to determine what went wrong.`
        //   );
        // }
      };
      // const data = { day: "Monday", time: "9:00 AM" };
      const addtoDatabase = () => {
        console.log("here");
        const days = ["Monday", "Tuesday", "Wednesday", "Thursday"];
        const times = ["9:00 AM", "10:00 AM", "12:00 PM", "2:00 PM"];
    
        let day = null;
        let time = null;
        let id = new Date();
        console.log(id);
        for (let l = 0; l < 30; l++) {
          for (let i = 0; times.length > i; i++) {
            time = times[i];
            for (let j = 0; days.length > j; j++) {
             day = days[j];
              let data = { id: id, day: day, time: time };
              console.log(data);
            }
    
            // adding(data);
          }
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
    )
}
export default Admin;
