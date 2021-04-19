import React, { useState, useEffect } from "react";
import axios from "axios";
import BreweryCard from "./BreweryCard";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  const fetchBreweries = async () => {
    const res = await axios.get("https://api.openbrewerydb.org/breweries");
    setData(res.data);
    console.log(res.data);
  };

  useEffect(() => {
    fetchBreweries();
  }, []);

  return (
    <>
      <div className='hero'>
        <BreweryCard data={data} />
      </div>
    </>
  );
}

export default App;
