import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useNavigate } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';

function Map() {
  const navigate = useNavigate();

  return (
    <div className="map-container">
      <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: "400px", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            <button onClick={() => navigate('/animation')}>Explore in 3D - The Brilliant Portal</button>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
