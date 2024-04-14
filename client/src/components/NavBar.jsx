import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Test Online</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">¿Que son los test?</Nav.Link>
            <NavDropdown title="Tests Disponibles" id="navbarScrollingDropdown">
                <NavDropdown title="Test de Aprovechamiento" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Test A</NavDropdown.Item>
                <NavDropdown.Item href="#action3">Test B</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Test de Actitud" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Test A</NavDropdown.Item>
                <NavDropdown.Item href="#action3">Test B</NavDropdown.Item>
                <NavDropdown.Item href="#action3">Test C</NavDropdown.Item>
                </NavDropdown>
            </NavDropdown>
            <Nav.Link href="#action1">Construir Test</Nav.Link>
            <Nav.Link href="#action1">Administrar Test Test</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar"
              className="me-2"
              aria-label="Search"
            />
            <Button className='btn-primary' variant="outline-success">Buscar</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;