import {
  MapContainer,
  Marker,
  Popup,
  TileLayer
} from 'react-leaflet';

import './App.css';

function App() {
  const position = {lat: -21.9471221, lng:-48.0065983}

  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
}

export default App;
