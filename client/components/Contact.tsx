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
          <p className="lead text-light pt-4">
            Questions? Fill out the form to contact me directly!
          </p>
          <p className="lead text-light mb-4 pb-5 pt-4">
            Alternatively, message or call Corey at one of the links below!
          </p>
        </div>
        <Container fluid="lg">
          <Row>
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
                label="Message"
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

            <Col className="text-center pt-5">
              <h1 className="text-light pb-3 pt-3">Links</h1>
              <Col xs={12} md={12} className="pb-3">
                <a href="tel: 027 312 9323" aria-label="telephone number">
                  <i className="bi bi-phone display-6">
                    <button
                      className="text-light px-3 lead"
                      style={{
                        textDecoration: 'none',
                        border: 'none',
                        background: 'none',
                        marginRight: '0.2rem',
                      }}
                    >
                      +64 27-312-9323
                    </button>
                  </i>
                </a>
              </Col>
              <Col xs={12} md={12} className="pb-3">
                <a
                  href="mailto: atd.decorators@gmail.com"
                  aria-label="link to instagram page"
                  target="_blank"
                  rel="noreferrer"
                  className="lead"
                  style={{ textDecoration: 'none' }}
                >
                  <i
                    className="bi bi-envelope-at display-6"
                    style={{ marginRight: '0.3rem' }}
                  >
                    <button
                      className="text-light px-3 lead"
                      style={{
                        textDecoration: 'none',
                        border: 'none',
                        background: 'none',
                      }}
                    >
                      Email me directly
                    </button>
                  </i>
                </a>
              </Col>
              <Col xs={12} md={12} className="pb-3">
                <a
                  href="https://www.facebook.com/attentiontodetaildecoratorsltd"
                  aria-label="link to facebook page"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-facebook display-6">
                    <button
                      className="text-light px-3 lead"
                      style={{
                        textDecoration: 'none',
                        border: 'none',
                        background: 'none',
                        marginLeft: '0.1rem',
                      }}
                    >
                      Facebook Message
                    </button>
                  </i>
                </a>
              </Col>
              <Col xs={12} md={12} className="pb-3">
                <a
                  href="https://www.instagram.com/attentiontodetail_decorators/"
                  aria-label="link to instagram page"
                  target="_blank"
                  rel="noreferrer"
                  className="lead"
                  style={{ textDecoration: 'none' }}
                >
                  <i
                    className="bi bi-instagram display-6"
                    style={{ marginLeft: '0.5rem' }}
                  >
                    <button
                      className="text-light px-3 lead"
                      style={{
                        textDecoration: 'none',
                        border: 'none',
                        background: 'none',
                      }}
                    >
                      Instagram Message
                    </button>
                  </i>
                </a>
              </Col>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Contact
