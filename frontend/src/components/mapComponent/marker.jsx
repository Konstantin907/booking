import React from "react";
import { Marker, Popup } from "react-leaflet";

export default function MarkerComponent(props) {
  return (
    <>
      <Marker position={props.position} icon={props.IconLocation}>
        <Popup>$ 400 CAD</Popup>
      </Marker>
    </>
  );
}
