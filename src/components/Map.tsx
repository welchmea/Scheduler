import GoogleMapReact from "google-map-react";

function Map() {
  let key = import.meta.env.VITE_GOOGLE_TOKEN
  const defaultProps = {
    center: {
      lat: 47.03266525268555,
      lng: -122.86538696289062,
    },
    zoom: 16,
  };

  return (
    <>
      <div className="z-10" style={{ height: "40vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: key}}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        ></GoogleMapReact>
      </div>
    </>
  );
}
export default Map;
