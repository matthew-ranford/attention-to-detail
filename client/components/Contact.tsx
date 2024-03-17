import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

function Contact() {
  return (
    <>
      <section id="contact" className="container mt-5">
        <div className="text-center">
          <h1 className="text-primary mt-3 pt-5">Contact us!</h1>
          <p className="lead text-light mb-4 pb-5 pt-4">
            Questions? Fill out the form to contact me directly!
          </p>
        </div>
        <Container fluid="lg">
          <Row className="justify-content-center align-items-center">
            <Col xs={12} md={6}>
              <FloatingLabel
                controlId="floatingName"
                label="Name"
                className="mb-3"
              >
                <Form.Control type="name" placeholder="Name" />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInput"
                label="Email address"
                className="mb-3"
              >
                <Form.Control type="email" placeholder="name@example.com" />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingNumber"
                label="Phone"
                className="mb-3"
              >
                <Form.Control type="phone" placeholder="Number" />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingSubjectMatter"
                label="Subject"
                className="mb-3"
              >
                <Form.Control type="subject" placeholder="Subject Matter" />
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingTextarea"
                label="Comments"
                className="mb-3"
              >
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: '10rem' }}
                />
              </FloatingLabel>
              <div className="text-center">
                <Button variant="primary" className="px-3 py-2 mb-3 mt-3">
                  Submit
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Contact
