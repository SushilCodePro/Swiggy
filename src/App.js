import React, { useState } from "react";
import List from "./List";
import Map from "./Map";

function App() {
  const [center, setCenter] = useState({ lat: 28.5355, lng: 77.391 }); 
  const handleCityClick = (coordinates) => {
    setCenter(coordinates); 
  };

  return (
    <div className="grid sm:grid-cols-2  border border-red-400 p-2">
      <div className="sm:col-span-1 border border-blue-400 p-2">
        <List onCityClick={handleCityClick} />
      </div>
      <div className="sm:col-span-1 border border-green-400 p-2">
        <Map center={center} />
      </div>
    </div>
  );
}

export default App;
