import { Container, Row, Col } from 'react-bootstrap'
import { motion } from 'framer-motion'

import logo from '../images/logo.png'

function Footer() {
  return (
    <Container fluid="lg" className="pb-2">
      <Row className="justify-content-left align-items-center">
        <Col xs={3} md={3}>
          <motion.a
            href="#home"
            initial={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            whileInView={{ opacity: 1 }}
            className="position-relative back-to-top-wrapper"
          >
            <img
              src={logo}
              alt="Attention To Detail Logo"
              width={170}
              className="-mx-2 md:-mx-4"
              loading="lazy"
              decoding="async"
            />
            <span className="back-to-top-text roboto-paragraph">
              Back to top
            </span>
          </motion.a>
        </Col>
      </Row>

      <div className="pt-2">
        <p className="text-left roboto-paragraph text-sm">
          © 2025 ATD Decorators | All rights reserved | +64 27 312 9323
        </p>
      </div>
      <div>
        <p className="text-left text-xs italic roboto-paragraph text-black">
          Website created by{' '}
          <a
            href="https://matthewranford.com"
            target="_blank"
            rel="noreferrer"
            className="roboto-paragraph text-black text-sm no-underline"
          >
            <span className="hover:text-[#006cc1] transition duration-1000 ">
              Matthew Ranford
            </span>
          </a>
        </p>
      </div>
    </Container>
  )
}

export default Footer
