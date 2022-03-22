import React from "react";
import styled from "styled-components";
import { WeatherIcons } from "../App";

export const WeatherInfoLogo = {
  sunrise: "/icons/temp.svg",
  sunset: "/icons/temp.svg",
  humidity: "/icons/humidity.svg",
  wind: "/icons/wind.svg",
  pressure: "/icons/pressure.svg",
};

const WeatherCondition = styled.div`
  display: flex;
  flex-diretion: row;
  place-items: center;
  width: 100%;
  justify-content: space-between;
  margin: 30px auto;
`;

const Condition = styled.span`
  margin: 20px auto;
  font-size: 14px;

  & span {
    font-size: 28px;
  }
`;

const WeatherLogo = styled.img`
  width: 100px;
  height: 100px;
  margin: 5px auto;
`;

const Location = styled.span`
  font-size: 28px;
  font-weight: bold;
`;

const WeatherDetail = styled.span`
  font-size: 14px;
  font-weight: bold;
  margin: 20px 25px 10px;
  text-align: left;
  width: 90%;
`;

const WeaherInfoContainer = styled.div`
  display: flex;
  width:90%
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 5px 10px;
  justify-content: space-evenly;
  align-items: center;
`;

const InfoIcon = styled.img`
  width: 36px;
  height: 36px;
`;

const InfoLabel = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  margin: 15px;

  & span {
    font-size: 12px;
    text-transform: capitalize;
  }
`;
const WeatherInfoComponent = (props) => {
  const { name, value } = props;
  return (
    <>
      <InfoContainer>
        <InfoIcon src={WeatherInfoLogo[name]} />
        <InfoLabel>
          {value}
          <span>{name}</span>
        </InfoLabel>
      </InfoContainer>
    </>
  );
};

const WeatherInfo = (props) => {
  const { weather } = props;
  const isDay = weather?.weather[0].icon?.includes("d");
  const getTime = (timeStamp) => {
    return `${new Date(timeStamp * 1000).getHours()} : ${new Date(
      timeStamp * 1000
    ).getMinutes()}`;
  };
  return (
    <>
      <WeatherCondition>
        <Condition>
          <span>{`${Math.floor(weather?.main?.temp - 273)}°C`} </span>{" "}
          {`| ${weather?.weather[0].description}`}
        </Condition>
        <WeatherLogo src={WeatherIcons[weather?.weather[0].icon]} />
      </WeatherCondition>
      <Location>{`${weather?.name}, ${weather?.sys?.country}`}</Location>
      <WeatherDetail>Weather Info</WeatherDetail>
      <WeaherInfoContainer>
        <WeatherInfoComponent
          name={isDay ? "sunset" : "sunrise"}
          value={`${getTime(weather?.sys[isDay ? "sunset" : "sunrise"])}`}
        />
        <WeatherInfoComponent name="humidity" value={weather?.main?.humidity} />
        <WeatherInfoComponent name="wind" value={weather?.wind?.speed} />
        <WeatherInfoComponent name="pressure" value={weather?.main?.pressure} />
      </WeaherInfoContainer>
    </>
  );
};

export default WeatherInfo;
