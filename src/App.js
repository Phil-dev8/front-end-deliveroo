import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import logo from "./assets/images/favicon-32x32.png";

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await axios.get("http://localhost:3200/");
    // console.log(response.data);
    setData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="app">
      <header>
        <img className="logo" src={logo} alt="logo deliveroo" />
        <h1>deliveroo</h1>
      </header>
      {isLoading ? (
        <span>En cours de chargement... </span>
      ) : (
        <div className="presentation">
          <div>
            <h2>{data.restaurant.name}</h2>
            <p>{data.restaurant.description}</p>
          </div>
          <img className="main-pic" src={data.restaurant.picture} alt="" />
        </div>
      )}
      {data.map((elem) => {
        return (
          <div>
            <h3></h3>
            <p></p>
            <p></p>
            <span></span>
          </div>
        );
      })}
      <div></div>
    </div>
  );
}

export default App;
