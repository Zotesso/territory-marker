import { FC } from "react";
import { MapContainer, TileLayer, Polyline, FeatureGroup, Tooltip } from "react-leaflet";
import { MapProps, TerritoryType } from "../../shared/models/map.model";
import { daysDiff } from "../../shared/utils/date.util";

const Map: FC<MapProps> = ({territories}): JSX.Element => {
  const colorOptions = [
    {minRange: 1, maxRange: 15, color: '#c83b59'},
    {minRange: 16, maxRange: 30, color: '#f1696e'},
    {minRange: 31, maxRange: 45, color: '#c5dc7a'},
    {minRange: 46, maxRange: 60, color: '#50c2bd'},
  ]

  const setColor = (territory: TerritoryType): {color: string, fill: boolean, fillColor: string} => {
    const colorSettings = {color: 'white', fill: true, fillColor: 'white'};
    if (territory.last_given_date && new Date(territory.last_given_date) > new Date(territory.last_worked_date)) {
      colorSettings.color = 'black';
      colorSettings.fillColor = 'black';
      return colorSettings;
    }

    if (territory.last_worked_date) {
      const daysPassed = daysDiff(new Date(), new Date(territory.last_worked_date));
    
      colorOptions.forEach(option => {
        if (daysPassed < option.minRange || daysPassed > option.maxRange) return;

        colorSettings.color = option.color;
        colorSettings.fillColor = option.color;
      })
    }

    return colorSettings
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
            positions={territory.polylines}
            key={territory.id}
          />
          <Tooltip direction="left" offset={[0, 0]} opacity={1} permanent>
            { territory.name } - { territory.id }
          </Tooltip>
        </FeatureGroup>
      ))}
    </MapContainer>
  );
};

export default Map;
