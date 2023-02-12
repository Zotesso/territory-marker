import { FC, useEffect, useState } from "react";
import { MapContainer, TileLayer, Polyline, FeatureGroup } from "react-leaflet";
import { MapProps, TerritoryType } from "../../shared/models/map.model";

const Map: FC<MapProps> = ({territories}): JSX.Element => {
  useEffect(() => {
    console.log('entrou aq');
  }, [territories]);

  const setColor = (territory: TerritoryType): {color: string, fill: boolean, fillColor: string} => {
    if (territory.last_worked_date) {
      console.log('teste')
    }
    console.log(territory);
    return { color: "gray", fill: true, fillColor: "gray"}
  };

  const mapStyle = {
    height: "100vh",
    width: "100%",
    margin: "0 auto",
  };

  const position = { lat: -21.9471221, lng: -48.0065983 };

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
              {territories.map((territory) => (

      <FeatureGroup
        pathOptions={setColor(territory)}
        key={territory.id}
      >
          <Polyline
            pathOptions={setColor(territory)}
            positions={territory.polylines}
            key={territory.id}
          />
      </FeatureGroup>
              ))}

    </MapContainer>
  );
};

export default Map;
