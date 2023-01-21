import { FC } from "react";
import { MapContainer, GeoJSON, TileLayer, Polyline, Rectangle, LayerGroup, FeatureGroup } from "react-leaflet";
import territorymock from '../../mocks/territory-mock.json';
import { MapProps } from "../../shared/models/map.model";

const Map: FC<MapProps> = ({map}): JSX.Element => {
  const mapStyle = {
    height: "100vh",
    width: "100%",
    margin: "0 auto",
  };

  const position = { lat: -21.9471221, lng: -48.0065983 };
  const blackOptions = { color: 'lime' }

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
    <FeatureGroup pathOptions={{color: 'lime', fill: true, fillColor: 'lime'}}>
    <Polyline pathOptions={blackOptions} positions={map.polylines} />
    </FeatureGroup>
    </MapContainer>
  );
};

export default Map;
