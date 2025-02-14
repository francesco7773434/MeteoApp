/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Card, Image } from "react-bootstrap";

const MeteoDetails = () => {
  const { city } = useParams();
  const [meteo, setMeteo] = useState(null);

  const getWeather = async () => {
    console.log(city);

    const resp = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=3e78190dd5e9fa9ca379d1ed00a20d79`);

    if (resp.ok) {
      const data = await resp.json();
      console.log(data);
      setMeteo(data);
    }
  };

  useEffect(() => {
    getWeather();
  }, [city]);

  if (!meteo) {
    return <p>Caricamento...</p>;
  }

  const iconUrl = `https://openweathermap.org/img/wn/${meteo.weather[0].icon}@2x.png`;

  console.log(meteo.name);

  return (
    <Container className="mt-5 text-center ">
      <Card className=" p-4 background-minicontainer">
        <Card.Body>
          <Card.Title as="h1">
            {meteo.name}, {meteo.sys.country}
          </Card.Title>
          <h4 className="mt-4">Weather</h4>
          <Image src={iconUrl} fluid />

          <Card.Text className="mt-4 display-5">{meteo.main.temp}°C</Card.Text>
          <Card.Text as="h4">{meteo.weather[0].description}</Card.Text>

          <Card.Text className="mt-5">
            Temperature: 🌡 Min: {meteo.main.temp_min}°C | Max: {meteo.main.temp_max}°C
          </Card.Text>
          <Card.Text> Vento: 💨 {meteo.wind.speed} m/s</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default MeteoDetails;
