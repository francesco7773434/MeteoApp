import { Container, Nav, Navbar } from "react-bootstrap";

import { Link, useLocation } from "react-router-dom";

const TopBar = () => {
  const location = useLocation();
  console.log(location);
  return (
    <Navbar expand="lg" bg="primary" variant="dark" style={{ backgroundColor: "#221f1f" }}>
      <Container fluid>
        <Navbar.Brand href="#">
          <img
            src="https://lh3.googleusercontent.com/_9v9pDVcSr5ZorPB8tdr49CyO4PiAoT9bVVicr1wPqLua18Ngv2Lkk1-lNcASdfuibC78E0kaYsC2jHT1VQ6A_ZH9mYPoGhn4yhybqw"
            alt="Logo"
            style={{ width: 100, height: 40 }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Link className="fw-bold nav-link text-white" to="/">
              Home
            </Link>
            <Link className="fw-bold nav-link text-white">Previsioni</Link>
            <Link className="fw-bold nav-link text-white">Regioni</Link>
            <Link className="fw-bold nav-link text-white">Notizie</Link>
            <Link className="fw-bold nav-link text-white">Info</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopBar;
