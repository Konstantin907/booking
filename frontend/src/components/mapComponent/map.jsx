import { MapContainer, TileLayer } from "react-leaflet";
import React, { useState } from "react";
import MarkerComponent from "./marker.jsx";
import "leaflet/dist/leaflet.css";

//Icon
import { IconLocation } from "./iconLocation.js";

export default function Maps() {
  const dummyData = [
    { lat: "45.4352", lng: "-75.7408" },
    { lat: "45.4349", lng: "-75.7405" },
    { lat: "45.4355", lng: "-75.7412" },
  ];
  const [position, setPosition] = useState(dummyData);
  const centerPosition = {
    lat: "45.43546382843854",
    lng: "-75.74087760369738",
  };
  /*const centerPosition2 = {
    lat: "43.808765261273635",
    lng: "-79.80214016619769",
  };*/

  return (
    <>
      <MapContainer center={centerPosition} zoom={14}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {position.map((markerPosition, index) => (
          <MarkerComponent
            key={index}
            IconLocation={IconLocation}
            position={markerPosition}
            setPosition={setPosition}
          />
        ))}
      </MapContainer>
    </>
  );
}
