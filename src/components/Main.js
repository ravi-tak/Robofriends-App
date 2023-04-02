import "./Main.css";
import { useEffect, useState } from "react";

function Main() {
  const [resData, setResData] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setResData(data);
        setData(data);
      });
  }, []);

  const handler = (event) => {
    var filterData = resData.filter((item) =>
      item.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    var newData = [];
    for (let data of filterData) {
      for (let getData of resData) {
        if (getData.name.toLowerCase() === data.name.toLowerCase())
          newData.push(getData);
      }
    }
    return setData(newData);
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

// For me

// getting data from other file(know more about it)
// const fetchData = require("../Data.json");

// async function getData() {
//  try {
//   const response = await axios('./Data.json');
//   const data = await response.data;
//   data.forEach(array => {
//     name.push(array.name)
//     email.push(array.email)
//     userName.push(array.username)
//   })
//  } catch (error) {
//     console.log("Error")
//  }
// }
// getData();
// console.log(name.length)
