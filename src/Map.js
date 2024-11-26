import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const Map = ({ center }) => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyD0Nyer1T5_S6VTYIlTSYthvkttjmZOGPk">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        <Marker position={center} /> 
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
