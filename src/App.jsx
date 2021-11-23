import React, { useEffect, useState, useCallback } from "react";
import { Cards, Chart, CountryPicker } from "./components";
import { fetchData } from "./api";
import covidImage from "./images/covid19.png";

import styles from "./App.module.css";

const App = () => {
  const [covidData, setCovidData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [country, setCountry] = useState("");

  const setData = useCallback(async () => {
    const data = await fetchData(country);
    setCovidData(data);
    setIsLoading(false);
  }, [country]);

  useEffect(() => {
    const getData = async () => {
      setData();
    };
    getData();
  }, [setData]);

  const handleCountryChange = async (country) => {
    setCountry(country);
    setIsLoading(true);
    setData(country);
  };

  return (
    <div className={styles.container}>
      <img src={covidImage} alt="COVID-19" className={styles.covidImage} />
      <Cards data={covidData} isLoading={isLoading} />
      <CountryPicker onCountryChange={handleCountryChange} />
      <Chart data={covidData} country={country} />
    </div>
  );
};

export default App;
