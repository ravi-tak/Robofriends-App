import { useState } from "react";
import "./Main.css";
import SearchBar from "./SearchBar";
import RoboItem from "./RoboItem";

function Main({ apiData }) {
  const resData = apiData;
  const [data, setData] = useState(resData);

  return (
    <div className="main">
      <SearchBar resData={resData} setData={setData} />
      <div className="cards-container">
        {data.map((robo) => (
          <RoboItem key={robo.id} robo={robo} />
        ))}
      </div>
    </div>
  );
}

export default Main;