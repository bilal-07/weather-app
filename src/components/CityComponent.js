import React from "react";
import styled from "styled-components";

const WeatherLogo = styled.img`
  width: 140px;
  height: 140px;
  margin: 40px auto;
`;

const ChooseCityText = styled.h3`
  color: #000;
  font-size: 18px;
  font-weight: bold;
  margin: 10px auto;
`;

const SearchBox = styled.form`
  display: flex;
  flex-direction: row;
  border-radius: 2px;
  color: #000;
  font-size: 18px;
  font-weight: 700;
  border: 1px solid #000;
  margin: 20px auto;
  & input {
    padding: 10px;
    font-size: 15px;
    border: none;
    outline: none;
    font-weight: bold;
  }

  & button {
    padding: 11px;
    font-size: 15px;
    color: #fff;
    background-color: #000;
    border: none;
    outline: none;
    font-weight: bold;
    cursor: pointer;
  }
`;
const CityComponent = (props) => {
  const { updateCity, fetchWeather } = props;
  return (
    <>
      <WeatherLogo src="/icons/perfect-day.svg" />
      <ChooseCityText>Find Weather of Your City</ChooseCityText>
      <SearchBox onSubmit={fetchWeather}>
        <input
          placeholder="City"
          onChange={(e) => updateCity(e.target.value)}
        />
        <button type="submit">Search</button>
      </SearchBox>
    </>
  );
};

export default CityComponent;
