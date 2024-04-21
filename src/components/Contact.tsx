import { SocialIcon } from "react-social-icons";

function Contact() {
  const instagram = (
    <SocialIcon
      bgColor="black"
      url="https://www.instagram.com/realmbymel/?hl=en"
    />
  );
  const linkedin = <SocialIcon bgColor="black" url="https://linkedin.com" />;
  const facebook = <SocialIcon bgColor="black" url="https://facebook.com" />;
  const twitter = (
    <SocialIcon bgColor="black" url="https://twitter.com/?lang=e" />
  );

  return (
    <>
          <div className="flex flex-row flex-wrap gap-x-2 gap-y-2 w-full place-content-center">
            <div className="flex flex-col flex-wrap items-start bg-white rounded-md h-full p-2 w-1/4">
              PHONE:
              <p>360-790-8040</p>
              EMAIL:
              <p>realmsalon @gmail.com</p>
              <div className="flex flex-wrap gap-x-2">
                {instagram}
                {facebook}
                {linkedin}
                {twitter}
              </div>
            </div>
            <div className="flex flex-col items-start bg-white rounded-md h-full p-2 w-1/4">
              HOURS:
              <ul>Monday:9AM-2PM</ul>
              <ul>Tuesday: 9AM–2PM</ul>
              <ul>Wednesday: 9AM–2PM</ul>
              <ul>Thursday: 9AM–2PM</ul>
              <ul>Friday, Saturday, & Sunday: Closed</ul>
            </div>
            <div className="flex flex-col items-start bg-white rounded-md h-full p-2 w-1/4 gap-y-4">
              ADDRESS:
              <p className="flex text-sm">
                1804 Boulevard Rd SE, Olympia, Washington 98501
              </p>
            </div>
          </div>

    </>
  );
}
export default Contact;
