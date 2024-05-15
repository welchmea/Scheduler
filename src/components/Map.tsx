import Map from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

function MapView() {

  return (
    <>
      <div>
        <Map
          mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}
          initialViewState={{
            longitude: -122.86538696289062,
            latitude: 47.03266525268555,
            zoom: 16
          }}
          mapStyle="mapbox://styles/mapbox/dark-v11"

        ></Map>
      </div>
    </>
  );
}
export default MapView;
