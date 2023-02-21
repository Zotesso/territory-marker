import { useEffect, useState } from "react";
import FloatActionButton from "../../components/FloatActionButton/FloatActionButton";
import Map from "../../components/Map/Map";
import Sidebar from "../../components/Sidebar/Sidebar";
import { TerritoryType } from "../../shared/models/map.model";
import { LIST_TERRITORY_CACHE } from "../../shared/utils/app-constants";

const Home = () => {
  const [mapDetails, setmapDetails] = useState<TerritoryType[]>([]);
  const [sidebarActive, setSidebarActive] = useState<boolean>(false);

  useEffect(() => {
    const cachedTerritoryList = localStorage.getItem(LIST_TERRITORY_CACHE);

    if (cachedTerritoryList) {
      setmapDetails(JSON.parse(cachedTerritoryList));
    } else {
      handleListTerritory();
    }
  }, []);

  const handleListTerritory = () => {
    fetch(
      "https://419qbp2aef.execute-api.us-east-1.amazonaws.com/dev/territory/list"
    )
      .then((response) => response.json())
      .then((mapsItems) => {
        mapsItems.forEach((item: any) => {
          item.polylines = JSON.parse(item.polylines).polylines;
        });

        localStorage.setItem(LIST_TERRITORY_CACHE, JSON.stringify(mapsItems));
        setmapDetails(mapsItems);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  const handleToogleSidebar = (): void => {
    setSidebarActive(!sidebarActive);
  }

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
        <FloatActionButton onClick={handleToogleSidebar}/>
        <Sidebar active={sidebarActive} handleToogleSidebar={handleToogleSidebar}/>
      </div>
    </div>
  );
};
export default Home;
