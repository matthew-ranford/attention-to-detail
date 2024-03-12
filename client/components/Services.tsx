import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Services() {
  return (
    <>
      <section id="services" className="container">
        <div className="text-center">
          <h1 className="text-primary mt-3">Services</h1>
          <p className="lead text-light mb-4 pb-3 pt-4">
            Checkout the services we offer before reaching out for a quote!
          </p>
        </div>
        <Container fluid="lg">
          <Row className="justify-content-center align-items-center">
            <Col xs={12} md={6}>
              <img
                src="client/images/atd-logo.png"
                className="img-fluid"
                alt=""
              />
            </Col>
            <Col xs={12} md={6}>
              <h2 className="text-primary">New Builds</h2>
              <p className="lead text-light">
                Whether you need a fresh coat of paint to spruce up your
                exisiting home or colour advice to shape your new one. Attention
                to Detail Decorators are here for all of your interior &
                exterior painting needs.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center align-items-center reverse-col">
            <Col xs={12} md={6}>
              <h2 className="text-primary">Renovations</h2>
              <p className="lead text-light">
                We are experienced in working with clients across all stages of
                home renovation.
              </p>
            </Col>
            <Col xs={12} md={6}>
              <img
                src="client/images/atd-logo.png"
                className="img-fluid"
                alt=""
              />
            </Col>
          </Row>
          <Row className="justify-content-center align-items-center">
            <Col xs={12} md={6}>
              <img
                src="client/images/atd-logo.png"
                className="img-fluid"
                alt=""
              />
            </Col>
            <Col xs={12} md={6}>
              <h2 className="text-primary">Waterblasting</h2>
              <p className="lead text-light">
                We also offer waterblasting services.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Services
