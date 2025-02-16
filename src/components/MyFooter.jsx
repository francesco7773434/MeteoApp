import { Col, Container, Row } from "react-bootstrap";

const FooterComponent = () => {
  return (
    <footer className=" py-3">
      <Container className="mt-3">
        <Row>
          <Col md={6}>
            <h5>Meteo Italia</h5>
            <p>Il tuo negozio meteo olnine. Scopri le ultime previsioni</p>
          </Col>
          <Col md={3}>
            <h6>Link utili</h6>
            <ul className="list-unstyled">
              <li>
                <a href="#home" className="  custom-link">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="  custom-link">
                  Chi Siamo
                </a>
              </li>
              <li>
                <a href="#contact" className="  custom-link">
                  Contatti
                </a>
              </li>
            </ul>
          </Col>
          <Col md={3}>
            <h6>Seguici</h6>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="  custom-link">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="  custom-link">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="  custom-link">
                  Twitter
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="text-center">
            <p className="mb-0">© 2025 Meteo.it </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterComponent;
