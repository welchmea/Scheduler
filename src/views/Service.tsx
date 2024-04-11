function Services() {
  let hair_services = 
    [
      {
        id: 0,
        service: "Color",
        price: 90,
      },
      {
        id: 1,
        service: "Balayage",
        price: 200,
      },
      {
        id: 2,
        service: "Partial Foil",
        price: 120,
      },
      {
        id: 3,
        service:"Full Foil",
        price: 150,
      },
      {
        id: 4,
        service:"Root Touch Up",
        price: 60,
      },
      {
        id: 5,
        service:"Children's Cut",
        price: 20,
      },
      {
        id: 6,
        service: "Color-Correction",
        price: 120,
      },
      {
        id: 7,
        service: "Brazilian Blow-out",
        price: 200,
      },
      {
        id: 8,
        service:"Keratin Treatment",
        price: 150,
      }
  ];
  const first_value = hair_services[1]
  console.log(first_value)
  return (
    <>
      <div className="bg-[url('./assets/images/giorgio-trovato-qrz6s4yDcIM-unsplash.jpg')] h-[100vh] bg-cover bg-right"></div>
      <div className="flex justify-center mt-48 fixed z-10 w-full">
        <div className="flex flex-row items-center justify-center bg-backgroundCard w-5/6 text-black h-[80vh] border border-white rounded-md gap-x-8 p-12">
          <div className="flex flex-col bg-calendarBG h-full w-full rounded-md text-lg">
            <label className="flex p-4">Services Offered: </label>
          </div>
          {/* <div className="flex flex-col bg-calendarBG h-5/6 w-1/2 rounded-md mr-8"></div> */}
        </div>
      </div>
    </>
  );
}
export default Services;
