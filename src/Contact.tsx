import Photo from "./assets/images/Unknown-1.jpeg";

function Contact() {
  return (
    <>
      <div className="flex flex-wrap bg-salmon p-4 mx-4">
        <div className="flex flex-row bg-whiteish w-full justify-between shadow-lg">
          <div className="flex bg-blueGrey p-16 text-xl italic items-center">
            Contact
          </div>
          <div className="flex border-l">
            <div className="flex p-2">
              <img src={Photo}></img>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-screen bg-salmon p-4 mx-4 mt-4">
        <div className="flex p-4 bg-otherTan w-full">
          <div className="flex bg-whiteish w-full items-center text-black place-content-center ">
            Phone: 360-790-8040
          </div>
        </div>
      </div>
    </>
  );
}
export default Contact;
