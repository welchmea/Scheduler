// interface HairServices {
//   id: number;
//   service: string;
//   price: number;
// }

function Services() {
  const color = [
    {
      id: 0,
      service: "Single Color",
      price: 90,
    },
    {
      id: 1,
      service: "Balayage",
      price: 200,
    },
    {
      id: 2,
      service: "Partial Balayage",
      price: 120,
    },
    {
      id: 3,
      service: "Partial Foil",
      price: 120,
    },
    {
      id: 4,
      service: "Full Foil",
      price: 150,
    },
    {
      id: 5,
      service: "Root Touch Up",
      price: 60,
    },
    {
      id: 6,
      service: "Baby Lights",
      price: 150,
    },
    {
      id: 7,
      service: "Color Correction",
      price: 200,
    },
  ]
  const cuts = [
    {
      id: 8,
      service: "Point Cut",
      price: 60,
    },
    {
      id: 9,
      service: "Texturizing Cut",
      price: 120,
    },
    {
      id: 10,
      service: "Child/Man",
      price: 30,
    },
    {
      id: 11,
      service: "Trim",
      price: 40,
    },
    {
      id: 12,
      service: "Bang Trim",
      price: 20,
    },
  ];
  const styling = [
    {
      id: 13,
      service: "Keratin",
      price: 100,
    },
    {
      id: 14,
      service: "Olaplex",
      price: 30,
    },
    {
      id: 15,
      service: "Conditioning",
      price: 30,
    },
    {
      id: 16,
      service: "Glossing/Toner",
      price: 50,
    },
    {
      id: 17,
      service: "Special Occasion",
      price: 250,
    },
    {
      id: 18,
      service: "Blowout",
      price: 35,
    },
  ];

  return (
    <>
      <div className="bg-[url('./assets/images/giorgio-trovato-qrz6s4yDcIM-unsplash.jpg')] h-[100vh] bg-cover bg-right"></div>
      <div className="flex w-full z-10 absolute mt-48 justify-center">
        <div className="flex flex-col bg-backgroundCard border border-white rounded-md w-5/6 p-8">
          <h1 className="flex mb-8 text-2xl">Services Offered: </h1>
          <div className="flex flex-row justify-between text-black gap-x-2">
            <div className="flex flex-col bg-calendarBG border border-white rounded-md w-1/3 text-xl">
              <h2 className="mt-12 text-2xl">Cuts</h2>
              <div className="w-full p-3">
              {cuts.map((key) => (
                <ul className="flex justify-between p-4">
                  <div className="flex">{key.service}</div>
                  <div className="flex">{"$ " + key.price + ".00"}</div>
                </ul>
              ))}
              </div>
            </div>
            <div className="flex flex-col bg-calendarBG border border-white rounded-md w-1/3 text-xl">
              <h2 className="mt-12 text-2xl">Color</h2>
              <div className="w-full p-3">
              {color.map((key) => (
                <ul className="flex justify-between p-4">
                  <div className="flex">{key.service}</div>
                  <div className="flex">{"$ " + key.price + ".00"}</div>
                </ul>
              ))}
              </div>
            </div>
            <div className="flex flex-col bg-calendarBG border border-white rounded-md w-1/3 text-xl">
              <h2 className="mt-12 text-2xl">Styling and Treatments</h2>
              <div className="w-full p-3">
              {styling.map((key) => (
                <ul className="flex justify-between p-4">
                  <div className="flex">{key.service}</div>
                  <div className="flex">{"$ " + key.price + ".00"}</div>
                </ul>
              ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Services;
