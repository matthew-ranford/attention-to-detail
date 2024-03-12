import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Offcanvas from 'react-bootstrap/Offcanvas'

function Navigation() {
  return (
    <>
      {['md'].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary p-3">
          <Container fluid>
            <Navbar.Brand href="#">
              <h1 className="px-3">
                <div>Attention</div> <div>To</div> <div>Detail</div>
              </h1>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton />
              <Offcanvas.Header>
                <Navbar.Brand>
                  <img
                    src="client/images/atd-logo.png"
                    className="img-fluid"
                    alt="Barber logo"
                  />
                </Navbar.Brand>
              </Offcanvas.Header>
              <Offcanvas.Body className="text-center">
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#about">
                    <h2>About</h2>
                  </Nav.Link>
                  <Nav.Link href="#services">
                    <h2>Services</h2>
                  </Nav.Link>
                  <Nav.Link href="#about">
                    <h2>Projects</h2>
                  </Nav.Link>
                  <Nav.Link href="#gallery">
                    <h2>Gallery</h2>
                  </Nav.Link>
                  <Nav.Link href="#contact">
                    <h2>Contact</h2>
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  )
}

export default Navigation
