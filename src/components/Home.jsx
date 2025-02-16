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
        {["Milano", "Napoli", "Roma", "Torino"].map((city) => (
          <Col key={city} className="col-md-6 col-12">
            <Link to={`/meteo-details/${city}`}>
              <Card className="bg-primary text-white cursor hover-effect">
                <Card.Body>{city}</Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
        {/*<Col className="col-md-6 col-12">
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
        </Col>*/}
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
      <Row>
        <Card className="p-0 border-0 mb-3">
          <Card.Body className="p-0 border-0">
            <Card.Text className="mt-3 p-3">Meteo-Italia-Puglia-Canosa di puglia</Card.Text>
            <Card.Title className="mt-2 mb-4 p-3">Meteo Canosa di Puglia e previsioni del tempo per oggi, domani ei prossimi 15 giorni</Card.Title>
            <Link className="p-3 cursor">Vota le previsioni</Link>
            <Row className="mt-4 p-3">
              <Col className="mb-2  mt-2">
                <i className="bi bi-facebook footer-icon me-4  fs-2"></i>
                <i className="bi bi-instagram footer-icon me-4  fs-2"></i>
                <i className="bi bi-twitter-x footer-icon me-4  fs-2"></i>
                <i className="bi bi-youtube footer-icon  fs-2"></i>
              </Col>
            </Row>
            <Card.Img
              className="small-img"
              variant="top"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Grantham_MMB_01_Nottingham_to_Grantham_Line_158847.jpg/800px-Grantham_MMB_01_Nottingham_to_Grantham_Line_158847.jpg"
            />
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
};

export default Home;
