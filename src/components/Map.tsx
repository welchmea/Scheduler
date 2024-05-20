import ReactMapGL, { MapProvider, MapRef, Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useMemo, useRef } from "react";
import React from "react";
import mapboxgl from "mapbox-gl";

export interface Viewport {
  latitude: number;
  longitude: number;
  zoom: number;
  bearing: number;
  pitch: number;
  dragPen: boolean;
}

function MapView() {

  const markerRef = useRef<mapboxgl.Marker>(null);

  const [viewport, setViewport] = React.useState<Viewport>({
    longitude: -122.86538696289062,
    latitude: 47.03266525268555,
    zoom: 16,
    pitch: 60,
    bearing: -60,
    dragPen: true,
  });

  const mapRef = useRef<MapRef>();

  const getDirections = useMemo(() => {
    return new mapboxgl.Popup().setText('Realm Salon');
  }, [])

  return (
    <>
      <MapProvider>
        <div className="h-[40vh]">
          <ReactMapGL
            id="map"
            ref={mapRef as React.MutableRefObject<MapRef>}
            {...viewport}
            onMove={(e) =>
              setViewport({
                latitude: e.viewState.latitude,
                longitude: e.viewState.longitude,
                zoom: e.viewState.zoom,
                bearing: e.viewState.bearing,
                pitch: e.viewState.pitch,
                dragPen: true,
              })
            }
            mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}
            initialViewState={{
              longitude: -122.86538696289062,
              latitude: 47.03266525268555,
              zoom: 16,
              pitch: 60,
              bearing: -60,
            }}
            mapStyle="mapbox://styles/mapbox/dark-v11"
          >
            <Marker longitude={-122.86538696289062} 
            latitude={47.03266525268555} 
            color="red" ref={markerRef}
            popup={getDirections} 
            anchor="bottom"/>
          </ReactMapGL>
        </div>
      </MapProvider>
    </>
  );
}
export default MapView;
