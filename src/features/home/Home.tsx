import { useEffect, useState } from "react";
import Map from "../../components/Map/Map";
import { MapType } from "../../shared/models/map.model";

const Home = () => {
  const [mapDetails, setmapDetails] = useState<MapType>({
    id: 0,
    last_given_date: "",
    last_worked_date: "",
    name: "",
    polylines: [],
  });

  useEffect(() => {
    fetch("https://419qbp2aef.execute-api.us-east-1.amazonaws.com/dev/territory-list")
      .then((response) => response.json())
      .then((mapsItems) => {
        console.log(mapsItems[0]);
        mapsItems[0].polylines = JSON.parse(mapsItems[0].polylines);
        console.log(mapsItems[0]);
        setmapDetails(mapsItems[0]);
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
      <div className="">
        <div className="">
          <Map map={mapDetails} />
        </div>
      </div>
    </div>
  );
};
export default Home;
