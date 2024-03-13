import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Footer() {
  return (
    <Container fluid="lg" className="mt-5 pt-5">
      <Row className="text-center justify-content-center pb-3">
        <Col xs={1}>
          <a
            href="https://www.facebook.com/attentiontodetaildecoratorsltd"
            aria-label="link to facebook page"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-facebook display-6"></i>
          </a>
        </Col>
        <Col xs={1}>
          <a
            href="https://www.instagram.com/attentiontodetail_decorators/"
            aria-label="link to instagram page"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-instagram display-6"></i>
          </a>
        </Col>
        <Col xs={1}>
          <a href="tel: 027 312 9323" aria-label="telephone number">
            <i className="bi bi-telephone display-6"></i>
          </a>
        </Col>
      </Row>
      <Row className="text-center justify-content-center pb-3 pt-2">
        <Col className="text-light">
          <div>
            Made with ❤️ by
            <a
              className="px-1"
              href="https://matthew-ranford.github.io/portfolio/"
              target="_blank"
              rel="noreferrer"
            >
              Matt Ranford
            </a>
            &copy;2024
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Footer
