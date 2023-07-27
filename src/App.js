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
        // respone is an axios promise obj it directly returns the JSON data in the response object
        // and it different from fetch promise obj because the fetch one dosn't contain json data directly 
        // we have use response.json() to get json data
        const response = await axios("https://jsonplaceholder.typicode.com/users");
        // When using await, it ensures that the code waits for the Promise to resolve
        // before proceeding to the next lines of code
        const jsonData = response.data; // Use response.data directly and it waits untill the promise resolved
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
      {/* This needs to be done length is not > 0 to show background and search bar from starting */}
      {!apiData.length > 0 && <Main apiData={apiData} />}
    </div>
  );
}

export default App;
