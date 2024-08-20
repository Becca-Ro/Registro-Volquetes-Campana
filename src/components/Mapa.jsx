import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

const Mapa = ({onCoordsChange}) => {
  const [marker, setMarker] = useState(null);

  const MapClickHandler = () => {
    const map = useMapEvents({
      click: (e) => {
        const { lat, lng } = e.latlng;
        setMarker([lat, lng]);
        onCoordsChange({lat, lng})
      }
    });
    return null;
  };

  return (
    <div className="relative border-2 border-solid border-violet-300 box-border z-10">
      <MapContainer 
        center={[-34.16303686762952, -58.95929374794591]} 
        zoom={15} 
        style={{ height: "325px", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <MapClickHandler />
        {marker && (
          <Marker position={marker}>
            <Popup>
              Coordenadas: {marker[0].toFixed(4)}, {marker[1].toFixed(4)}
            </Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
};


export default Mapa;


