import { useMemo } from "react";
import { GoogleMap, useLoadScript, MarkerF, InfoWindow } from "@react-google-maps/api";
import { useState } from "react";
import {chargingStationIcon} from "../data/mockData"
import { Box } from "@mui/material";
export default function MyComponent2() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBj1E_AJG7P9gIuoIZM-sfk0Y_tuMIlmXs",
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

function Map() {
  const center = useMemo(() => ({ lat: 22.253275, lng: 84.90164 }), []);
  const [selectedStation, setSelectedStation] = useState(null);
  const chargingStations = useMemo(() => [
    {
      name: "Station 1",
      lat: 22.256207, lng: 84.919090,
      availability: "Available",
      chargingSpeed: "Fast",
      powerType: "Solar",
      openingHours: "9 AM - 5 PM",
      contact: "012-345-6789",
      additionalServices: "Security Patrol",
      safetyInfo: "Security on-site. Report any suspicious activity."
    },    
  ], []);

  
  return (
    <GoogleMap zoom={13} center={center} mapContainerClassName="map-container10">
      {chargingStations.map((station, index) => (
        <MarkerF key={index} position={station}  onClick={() => setSelectedStation(station)} />
      ))}
      {selectedStation && (
        <InfoWindow
          position={selectedStation}
          onCloseClick={() => setSelectedStation(null)}

        >
          <div style={{ color: "black" }}>
            <h2>Drone Alpha</h2>
            <p>Location: Ispat Industrial Training Center</p>
            <p>Danger: In Danger</p>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}
