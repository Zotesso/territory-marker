import { MapContainer, GeoJSON, TileLayer, Polyline, Rectangle, LayerGroup, FeatureGroup } from "react-leaflet";
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
  const multiPolyline = [
    [
      {lat: -21.96374142164783, lng:-48.0087234882966},
      {lat: -21.96457706138219, lng:-48.009666907363076},
      {lat: -21.964184020812752, lng:-48.01008702365943},
      {lat:  -21.96375680156344, lng:-48.00868663598837},
      {lat: -21.96340135417099, lng: -48.00916940122071},
      {lat: -21.96419940067556, lng: -48.01006122705527},
    ],
    [
      {lat: -21.96378927027687, lng: -48.00867189505988},
      {lat: -21.964137881196407,lng:  -48.00824809353284},
      {lat: -21.964137881196407,lng:  -48.00824809353284},
      {lat: -21.964990607249305,lng:  -48.009228364897226},
      {lat: -21.964990607249305,lng:  -48.009228364897226},
      {lat: -21.964618074255682,lng:  -48.00967980565428},
      {lat: -21.964618074255682,lng:  -48.00967980565428},
      {lat: -21.963784143638566,lng:  -48.00867742291293},
    ],
    [
      {lat: -21.96414642558393, lng: -48.00824809352036},
      {lat: -21.964518959804252, lng: -48.0077874396551},
      {lat: -21.964518959804252, lng: -48.0077874396551},
      {lat: -21.96541321636198, lng: -48.00876336897892},
      {lat: -21.96541321636198, lng: -48.00876336897892},
      {lat: -21.96504068447659, lng: -48.009198226197945},
      {lat: -21.96504068447659, lng: -48.009198226197945},
      {lat: -21.9641691611122, lng: -48.00822164007045},
    ]
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
    <FeatureGroup pathOptions={{color: 'lime', fill: true, fillColor: 'lime'}}>
    <Polyline pathOptions={blackOptions} positions={multiPolyline} />
    </FeatureGroup>
    </MapContainer>
  );
};

export default Map;
