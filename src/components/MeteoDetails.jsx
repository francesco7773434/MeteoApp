/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Card, Image, Row, Col } from "react-bootstrap";

const MeteoDetails = () => {
  const { city } = useParams();
  const [meteo, setMeteo] = useState(null);
  const [previsioni, setPrevisioni] = useState([]);
  const [error, setError] = useState(null);

  const getWeather = async () => {
    console.log(city);
    try {
      const resp = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=3e78190dd5e9fa9ca379d1ed00a20d79`);

      if (resp.ok) {
        const data = await resp.json();
        console.log(data);
        setMeteo(data);
      } else {
        console.log(error);
        throw new Error("Errore nella fetch");
      }
    } catch (error) {
      setError(error.message);
      console.log(error);
    }
  };

  const getForecast = async () => {
    try {
      const resp = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=3e78190dd5e9fa9ca379d1ed00a20d79`);
      if (resp.ok) {
        const data = await resp.json();
        setPrevisioni(data.list.slice(0, 5));
      } else {
        throw new Error("Errore nella fetch");
      }
    } catch (error) {
      setError(error.message);
      console.log(error);
    }
  };

  useEffect(() => {
    getWeather();
    getForecast();
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
      <h3 className="mt-5">Previsioni per i prossimi giorni</h3>
      <Row className="mt-3 justify-content-center">
        {previsioni.map((giorno, index) => (
          <Col key={index} md={2} className="mb-3">
            <Card className="text-center p-3 bg-container">
              <Card.Body>
                <Image src={`https://openweathermap.org/img/wn/${giorno.weather[0].icon}@2x.png`} fluid />
                <Card.Text>{giorno.main.temp}°C</Card.Text>
                <Card.Text>{giorno.weather[0].description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MeteoDetails;
