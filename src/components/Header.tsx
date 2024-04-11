import { useEffect, useState } from "react";

function Header() {
  const [transformHeader, setTransformHeader] = useState<number>(0);
  useEffect(() => {
    setTransformHeader(100);
  }, [transformHeader]);
  return (
    <>
      <div>Realm Salon</div>
    </>
  );
}
export default Header;
