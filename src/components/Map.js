import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';


const containerStyle = {
    width: '400px',
    height: '400px'
};

const center = {
    lat: 23.829210,
    lng: 90.420021
};

const Map = () => {
    return (
        <LoadScript
            googleMapsApiKey="YOUR_API_KEY"
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
            >
                { /* Child components, such as markers, info windows, etc. */}
                <></>
            </GoogleMap>
        </LoadScript>
    );
};

export default Map;