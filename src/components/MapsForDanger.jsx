import { useMemo } from "react";
import { GoogleMap, useLoadScript, MarkerF, InfoWindow } from "@react-google-maps/api";
import { useState } from "react";

export default function MyComponent3() {
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
            stationName: "Station 1",
            lat: 22.24611032307791, lng: 84.903476,
            name: "Aaradhya Singh",
            age: 20 // Placeholder value
        },
        {
            stationName: "Station 2",
            lat: 22.27045965990729, lng: 84.887782,
            name: "Diya Patel",
            age: 21 // Placeholder value
        },
        {
            stationName: "Station 3",
            lat: 22.264755710301035, lng: 84.887434797107,
            name: "Priyanka Sharma",
            age: 22 // Placeholder value
        },
        {
            stationName: "Station 4",
            lat: 22.231713307095255, lng: 84.925891,
            name: "Sanjana Gupta",
            age: 24 // Placeholder value
        },
        {
            stationName: "Station 5",
            lat: 22.268359662240353, lng: 84.882273,
            name: "Isha Joshi",
            age: 26 // Placeholder value
        },
        {
            stationName: "Station 6",
            lat: 22.265006665965114, lng: 84.903628,
            name: "Ananya Reddy",
            age: 30 // Placeholder value
        },
        {
            stationName: "Station 7",
            lat: 22.233659710747865, lng: 84.8871959386561,
            name: "Kavya Iyer",
            age: 19 // Placeholder value
        },
        {
            stationName: "Station 8",
            lat: 22.258559710390085, lng: 84.89157422412183,
            name: "Riya Chatterjee",
            age: 28 // Placeholder value
        },
        {
            stationName: "Station 9",
            lat: 22.265237665708515, lng: 84.903177,
            name: "Tanvi Desai",
            age: 23 // Placeholder value
        },
        {
            stationName: "Station 10",
            lat: 22.256206710423896, lng: 84.90938838624598,
            name: "Nidhi Verma",
            age: 22 // Placeholder value
        }
    ], []);

    return (
        <GoogleMap zoom={13} center={center} mapContainerClassName="map-container">
            {chargingStations.map((station, index) => (
                <MarkerF key={index} position={station} onClick={() => setSelectedStation(station)} />
            ))}
            {selectedStation && (
                <InfoWindow
                    position={selectedStation}
                    onCloseClick={() => setSelectedStation(null)}

                >
                    <div style={{ color: "black" }}>
                        <h2>{selectedStation.name}</h2>
                        <p>Location: {selectedStation.lat}, {selectedStation.lng}</p>
                        <p>Name: {selectedStation.name}</p>
                        <p>Age: {selectedStation.age}</p>
                    </div>
                </InfoWindow>
            )}
        </GoogleMap>
    );
}
