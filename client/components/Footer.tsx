import { Container, Row, Col } from 'react-bootstrap'
import { motion } from 'framer-motion'

import logo from '../images/atd-logo.png'

function Footer() {
  return (
    <Container fluid="lg" className="mt-5 pt-5">
      <Row className="justify-content-center align-items-center">
        <Col xs={3} md={3}>
          <motion.a
            href="#home"
            initial={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            whileInView={{ opacity: 1 }}
          >
            <img
              src={logo}
              alt="Attention To Detail Logo"
              width={250}
              loading="lazy"
              decoding="async"
            />
          </motion.a>
        </Col>
      </Row>
    </Container>
  )
}

export default Footer
