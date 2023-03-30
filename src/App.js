// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';



function App() {

// getting data from other file(know more about it)
const data = require('./Data.json') 

// Creating divs that will show up on rendering
let divs = data.map(data => {
  return (
    <div key={data.id}>
      <img src={`https://robohash.org/${data.id}`} />
      <span className="bold">{data.name}</span>
      <p>{data.email}</p>
      <p>{data.username}</p>
    </div>
  )
})


// To render the change using state concept
var [divArray, setDivArray] = useState(divs)

const names = data.map(data => data.name.toLowerCase())

// event handler
const handler = (event) => {
  var filterName = names.filter(name => name.includes(event.target.value.toLowerCase()))

  var newData = []
  for(let name of filterName){
     for(let getData of data){
      if(getData.name.toLowerCase() === name)
       newData.push(getData);
     }
  }

  divArray = newData.map(newData => {
    return (
      <div key={newData.id}>
      <img src={`https://robohash.org/${newData.id}`} />
      <span className="bold">{newData.name}</span>
      <p>{newData.email}</p>
      <p>{newData.username}</p>
    </div>
    )
  })

  return setDivArray(divArray)
}


  return (
    <div className="App">

      <div className="heading">
        <h1>MONSTERS</h1>
      </div>

      <div className="main">
        
        <div>
          <p>Serach Monster</p>
          <input type="search" id="input" placeholder="Monster" onChange={handler}></input>
        </div>

        <div className="box-container">
          {divArray}
        </div>

      </div>

    </div>
  );
}

export default App;


























// For me

// const promise = fetch("https://jsonplaceholder.typicode.com/users")
// promise.then((res) => res.json())
// .then((data) => forEach(array => {
//   name.push(array.name)
//   email.push(array.email)
//   userName.push(array.username)
// }))
// console.log(name)
// console.log(name.length)



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



// This not a right way to access div element

// const handleChange = (event) => {
//    var array = divs.filter(div => {
//     // let span = document.querySelector('span')
//     if(div.span.innerText === event.target.value)
//       return div
//   })
//   console.log(array)
//   // div = array;
//   // setDiv(div);
// }