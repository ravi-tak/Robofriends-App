import { useEffect, useState } from "react";
import "./Main.css";
import axios from "axios";

function Main() {
  const [resData, setResData] = useState([]);
  const [data, setData] = useState([]);

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
        setResData(jsonData);
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getResponseData();
  }, []);

  const handler = (event) => {
    const searchValue = event.target.value.toLowerCase();
    const filteredData = resData.filter((item) =>
      item.name.toLowerCase().includes(searchValue)
    );
    setData(filteredData);
  };

  return (
    <div className="main">
      <div>
        <p>Serach Monster</p>
        <input
          type="search"
          id="input"
          placeholder="Monster"
          onChange={handler}
        ></input>
      </div>

      <div className="cards-container">
        {data.map((element) => (
          <div key={element.id}>
            <img src={`https://robohash.org/${element.id}`} />
            <span className="bold">{element.name}</span>
            <p>{element.email}</p>
            <p>{element.username}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main;