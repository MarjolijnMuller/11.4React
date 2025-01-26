import React, {useContext} from 'react';
import './WeatherDetail.css';
import {TempContext} from "../../context/TempProvider";

const {kelvinToMetric} = useContext(TempContext);

function WeatherDetail() {
  return (
    <section className="day-part">
      <span className="icon-wrapper">
        *Icoontje van het weer*
      </span>
      <p className="description">Zonnig</p>
      <p>{kelvinToMetric(forecast.temp.day)}</p>
    </section>
  );
};

export default WeatherDetail;
