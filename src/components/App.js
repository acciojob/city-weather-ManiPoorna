
import React, { useState } from "react";
import './../styles/App.css';
import axios from "axios";

const App = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  function searhWeather(e) {
    e.preventDefault();
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=5f703e96b82fb8671c275a6f46cb7822`)
      .then(response => response)
      .then(result => setData(result.data))
      .catch(err => {
        setError(err.response.data.message)
        setData("")
      })
  }
  console.log(data)
  return (
    <div>
      <form onSubmit={(e) => searhWeather(e)} >
        <input className="search" type="search" onChange={(e) => setSearch(e.target.value)} />
      </form>
      <div style={{width : "40%",padding:"1rem 2rem"}}>
        {data ?
          <div>
            <h2>{data.name}</h2>
            <p>{data?.weather && data?.weather[0].main}</p>
            {/* <p>$#{data?.weather && data?.weather[0].icon }</p> */}
          </div>
            : <h1>{error}</h1>
        }
      </div>
    </div>
  )
}

export default App
