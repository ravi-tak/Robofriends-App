import { useEffect, useState } from "react";
import "./App.css";
import Title from "./components/Title";
import Main from "./components/Main";
import axios from "axios";

function App() {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const getResponseData = async () => {
      try {
        const response = await axios("https://jsonplaceholder.typicode.com/users");
        const jsonData = response.data;
        setApiData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getResponseData();
  }, []);

  return (
    <div className="App">
      <Title />
      {apiData.length > 0 && <Main apiData={apiData} />}
      {!apiData.length > 0 && <Main apiData={apiData} />}
    </div>
  );
}

export default App;
