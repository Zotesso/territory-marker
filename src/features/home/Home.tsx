import { useEffect, useState } from "react";
import FloatActionButton from "../../components/FloatActionButton/FloatActionButton";
import Map from "../../components/Map/Map";
import { TerritoryType } from "../../shared/models/map.model";

const Home = () => {
  const [mapDetails, setmapDetails] = useState<TerritoryType[]>([]);

  useEffect(() => {
    fetch(
      "https://419qbp2aef.execute-api.us-east-1.amazonaws.com/dev/territory/list"
    )
      .then((response) => response.json())
      .then((mapsItems) => {
        mapsItems.forEach((item: any) => {
          item.polylines = JSON.parse(item.polylines).polylines;
        });
        setmapDetails(mapsItems);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="container">
      <div className="header">
        <h2 className="heading">Território</h2>
        <p className="text-muted">Descrição</p>
      </div>
      <div className="body">
        <div className="map">
          <Map territories={mapDetails} />
        </div>
        <FloatActionButton />
      </div>
    </div>
  );
};
export default Home;
