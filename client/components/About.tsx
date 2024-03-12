import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

function About() {
  return (
    <>
      <section id="about">
        <Container fluid="lg">
          <Row className="justify-content-center align-items-center">
            <Col xs={12} md={6}>
              <img
                src="client/images/atd-logo.png"
                className="img-fluid"
                alt="Barber logo"
              />
            </Col>
            <Col xs={12} md={6} className="lead text-light pt-4">
              <p>
                Whether you need a fresh coat of paint to spruce up your
                exisiting home or colour advice to shape your new one. Attention
                to Detail Decorators are here for all of your interior &
                exterior painting needs.
              </p>
              <p>
                Our founder Corey Daken has been working in the industry for
                over 10 years bringing a range of experience with him. His work
                has involved collaboarting with architects, interior designers,
                construction companies and home owners to meet the results that
                his clients desire.
              </p>
              <p>The ATD team work all across the Wellington region.</p>
              <Button variant="primary" className="px-3 py-2">
                Get a Quote
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default About
