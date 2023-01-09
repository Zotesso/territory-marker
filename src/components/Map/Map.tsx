import { MapContainer, GeoJSON, TileLayer, Polyline, Rectangle } from "react-leaflet";
import territorymock from '../../mocks/territory-mock.json';

const Map = () => {
  const mapStyle = {
    height: "100vh",
    width: "100%",
    margin: "0 auto",
  };

  const style = (() => {
    return ({
        weight: 1,
        opacity: 1,
        color: 'white',
        dashArray: '2',
        fillOpacity: 0.5
    });
  });

  const position = { lat: -21.9471221, lng: -48.0065983 };
  const blackOptions = { color: 'lime' }
  const rectangle   = [
    [ -21.9471221, -48.0065983 ],
    [ -21.2471221, -46.0065983 ],
  ]

  return (
    <MapContainer
      center={position}
      zoom={14}
      scrollWheelZoom={true}
      style={mapStyle}
    >
      <TileLayer
        attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
        url="https://api.maptiler.com/maps/streets-v2/256/{z}/{x}/{y}.png?key=LGVj4QkGZ2R9iATEwUVu"
      />
      <Rectangle bounds={ [
    [ -21.9641324,-48.0077836 ],
    [ -21.9663415,-48.0099982 ],
  ]} pathOptions={blackOptions} />
    </MapContainer>
  );
};

export default Map;
