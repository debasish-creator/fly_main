import { useMemo } from "react";
import { GoogleMap, useLoadScript, MarkerF, InfoWindow } from "@react-google-maps/api";
import { useState } from "react";
import { Box } from "@mui/material";
import {chargingStationIcon} from "../data/mockData"

export default function MyComponent() {
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
      lat: 22.255141, lng: 84.903476,
      availability: "Available",
      chargingSpeed: "Fast",
      powerType: "Solar",
      openingHours: "9 AM - 5 PM",
      contact: "123-456-7890",
      additionalServices: "Maintenance, Repairs",
      safetyInfo: "Follow standard safety protocols."
    },
    {
      name: "Station 2",
      lat: 22.261429, lng: 84.887782,
      availability: "Occupied",
      chargingSpeed: "Standard",
      powerType: "Electric",
      openingHours: "24/7",
      contact: "234-567-8901",
      additionalServices: "Overnight Parking, Snack Bar",
      safetyInfo: "Do not leave drones unattended."
    },
    {
      name: "Station 3",
      lat: 22.264756, lng: 84.897137,
      availability: "Available",
      chargingSpeed: "Moderate",
      powerType: "Hybrid",
      openingHours: "6 AM - 10 PM",
      contact: "345-678-9012",
      additionalServices: "Flight Planning Assistance",
      safetyInfo: "Ensure battery is below 60% before charging."
    },
    {
      name: "Station 4",
      lat: 22.240744, lng: 84.925891,
      availability: "Available",
      chargingSpeed: "Fast",
      powerType: "Solar",
      openingHours: "8 AM - 4 PM",
      contact: "456-789-0123",
      additionalServices: "Tire Inflation",
      safetyInfo: "Check tire pressure before starting charging."
    },
    {
      name: "Station 5",
      lat: 22.259329, lng: 84.882273,
      availability: "Occupied",
      chargingSpeed: "Standard",
      powerType: "Electric",
      openingHours: "24/7",
      contact: "567-890-1234",
      additionalServices: "Car Wash, Lounge",
      safetyInfo: "No smoking within charging area."
    },
    {
      name: "Station 6",
      lat: 22.255976, lng: 84.903628,
      availability: "Available",
      chargingSpeed: "Moderate",
      powerType: "Hybrid",
      openingHours: "7 AM - 11 PM",
      contact: "678-901-2345",
      additionalServices: "Free Wi-Fi",
      safetyInfo: "Park only in designated spots."
    },
    {
      name: "Station 7",
      lat: 22.233660, lng: 84.896896,
      availability: "Available",
      chargingSpeed: "Fast",
      powerType: "Solar",
      openingHours: "10 AM - 6 PM",
      contact: "789-012-3456",
      additionalServices: "Restrooms, Charging Cables",
      safetyInfo: "Use provided cables for charging."
    },
    {
      name: "Station 8",
      lat: 22.258560, lng: 84.901276,
      availability: "Occupied",
      chargingSpeed: "Standard",
      powerType: "Electric",
      openingHours: "24/7",
      contact: "890-123-4567",
      additionalServices: "Food Court, Play Area",
      safetyInfo: "Keep children supervised at all times."
    },
    {
      name: "Station 9",
      lat: 22.256207, lng: 84.903177,
      availability: "Available",
      chargingSpeed: "Moderate",
      powerType: "Hybrid",
      openingHours: "8 AM - 10 PM",
      contact: "901-234-5678",
      additionalServices: "Car Charging History",
      safetyInfo: "Access charging history through app."
    },
    {
      name: "Station 10",
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
  const icon={
    url: chargingStationIcon,
    scaledSize: new window.google.maps.Size(35, 35),
  }
  
  return (
    <GoogleMap zoom={13} center={center} mapContainerClassName="map-container">
      {chargingStations.map((station, index) => (
        <MarkerF key={index} position={station} icon={icon} onClick={() => setSelectedStation(station)} />
      ))}
      {selectedStation && (
        <InfoWindow
          position={selectedStation}
          onCloseClick={() => setSelectedStation(null)}

        >
          <div style={{ color: "black" }}>
            <h2>{selectedStation.name}</h2>
            <p>Location: {selectedStation.lat}, {selectedStation.lng}</p>
            <p>Availability: {selectedStation.availability}</p>
            <p>Charging Speed: {selectedStation.chargingSpeed}</p>
            <p>Power Type: {selectedStation.powerType}</p>
            <p>Opening Hours: {selectedStation.openingHours}</p>
            <p>Contact: {selectedStation.contact}</p>
            <p>Additional Services: {selectedStation.additionalServices}</p>
            <p>Safety Information: {selectedStation.safetyInfo}</p>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}
