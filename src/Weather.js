import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="weather-container">
      <div className="container">
        <div className="weather">
          <form className="search-form">
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Search Cities..."
                  className="search-input"
                  id="search-text-input"
                />
              </div>
              <div className="col-3 p-0">
                <input type="submit" value="Search" class="search-btn" />
              </div>
            </div>
          </form>
          <div className="weather-info">
            <div className="row">
              <div className="col-6">
                <h1>Seattle</h1>
                <ul>
                  <li>
                    <span id="day">Tuesday </span>
                    <span id="time"> 10:20 AM</span>
                  </li>
                  <li>
                    Humidity <span id="humidity"></span>
                    <span id="percent">%</span> <span id="wind">Wind</span>
                    <span id="wind-speed"></span>
                    <span id="mph">mph</span>
                  </li>
                </ul>
              </div>
              <div className="col-6">
                <div className="current-temp">
                  <img
                    src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png"
                    alt="cloudy"
                    id="icon"
                  />
                  <span className="temperature">
                    <strong>54</strong>
                  </span>
                  <span className="unit">°F</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="weather-forecast" id="forecast"></div>
      </div>
    </div>
  );
}
