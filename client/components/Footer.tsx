import { Container, Row, Col } from 'react-bootstrap'
import { motion } from 'framer-motion'

import logo from '../images/ATD-logo.png'

function Footer() {
  return (
    <Container fluid="lg" className="pt-5 pb-2">
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
              className="mx-3"
              loading="lazy"
              decoding="async"
            />
          </motion.a>
        </Col>
      </Row>
      <div className="pt-2">
        <p className="text-center text-sm text-primary">
          © 2024 ATD Decorators | All rights reserved | +64 27 312 9323
        </p>
      </div>
      <div>
        <p className="text-center text-xs italic text-zinc-200">
          Website created by{' '}
          <a
            href="https://matthew-ranford.github.io/new-portfolio/"
            target="_blank"
            rel="noreferrer"
            className="text-zinc-200 hover:text-amber-500 transition duration-1000 no-underline"
          >
            Matthew Ranford
          </a>
        </p>
      </div>
    </Container>
  )
}

export default Footer
