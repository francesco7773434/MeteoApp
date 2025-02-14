/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from "react";

import { Col, Container, Form, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const FetchHome = () => {
  const [searchValue, setSearchValue] = useState("");
  const [cityObj, setcityObj] = useState([]);

  const getCity = async () => {
    if (!searchValue) return;
    console.log(searchValue);

    const resp = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${searchValue}&limit=5&appid=3e78190dd5e9fa9ca379d1ed00a20d79`);

    if (resp.ok) {
      const cityObj = await resp.json();
      console.log(cityObj);
      setcityObj(cityObj);
      console.log(cityObj);
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
              <Form.Label>Cerca una città</Form.Label>
              <Form.Control type="text" placeholder="Cerca una città..." value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
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
    </Container>
  );
};

export default FetchHome;
