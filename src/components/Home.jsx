/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from "react";

import { Card, Col, Container, Form, InputGroup, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  const [searchValue, setSearchValue] = useState("");
  const [cityObj, setcityObj] = useState([]);
  const [error, setError] = useState(null);

  const getCity = async () => {
    if (!searchValue) return;
    console.log(searchValue);

    try {
      const resp = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${searchValue}&limit=5&appid=3e78190dd5e9fa9ca379d1ed00a20d79`);

      if (resp.ok) {
        const cityObj = await resp.json();

        setcityObj(cityObj);
        console.log(cityObj);
      } else {
        console.log(error);
        throw new Error("Errore nella fetch");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    getCity();
  }, [searchValue]);

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col className="col-8">
          <Form>
            <Form.Group className="mb-3">
              <Form.Label></Form.Label>
              <InputGroup>
                <InputGroup.Text>
                  <i className="bi bi-search cursor"></i>
                </InputGroup.Text>

                <Form.Control type="text" placeholder="Cerca una città..." value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
              </InputGroup>
            </Form.Group>
          </Form>

          <ListGroup as="ul">
            {cityObj.map((city) => (
              <ListGroupItem as="li" key={`${city.lat}-${city.lon}`}>
                <Link to={`/meteo-details/${city.name}`} className="nolink">
                  {city.name}, {city.country}
                </Link>
              </ListGroupItem>
            ))}
          </ListGroup>
        </Col>
      </Row>
      <Row className="g-4 mt-4">
        <Col className="col-md-6 col-12 ">
          <Card className="bg-primary text-white cursor">
            <Card.Body>Milano</Card.Body>
          </Card>
        </Col>
        <Col className="col-md-6 col-12">
          <Card className="bg-primary text-white cursor">
            <Card.Body>Napoli</Card.Body>
          </Card>
        </Col>
        <Col className="col-md-6 col-12">
          <Card className="bg-primary text-white cursor">
            <Card.Body>Roma</Card.Body>
          </Card>
        </Col>
        <Col className="col-md-6 col-12">
          <Card className="bg-primary text-white cursor">
            <Card.Body>Torino</Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col className="mb-2 text-center mt-5">
          <i className="bi bi-facebook footer-icon me-4 text-white fs-2"></i>
          <i className="bi bi-instagram footer-icon me-4 text-white fs-2"></i>
          <i className="bi bi-twitter-x footer-icon me-4 text-white fs-2"></i>
          <i className="bi bi-youtube footer-icon text-white fs-2"></i>
          <h3 className="mt-5 text-white">Previsioni meteo Italia</h3>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
