import { useEffect, useState } from "react";
import "./Main.css";
import SearchBar from "./SearchBar";
import RoboItem from "./RoboItem";

function Main({ apiData }) {
  const [data, setData] = useState(apiData);
  useEffect(() => {
    setData(apiData);
  }, [apiData]);

  return (
    <div className="main">
      <SearchBar
        apiData={apiData}
        setData={setData}
      />
      {!apiData.length > 0 ? (
        <p>Loading...</p>
      ) : (
        <div className="cards-container">
          {data.length > 0 ? (
            data.map((robo) => (
              <RoboItem
                key={robo.id}
                robo={robo}
              />
            ))
          ) : (
            <p>Oops! No Mosnter</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Main;
