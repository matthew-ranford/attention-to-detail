import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { motion } from 'framer-motion'

function Footer() {
  return (
    <Container className="mt-5 pt-5">
      <Row className="pt-5 mt-5">
        <Col xs={12} md={12}>
          <h1 className="text-light">
            <a
              href="#home"
              className="text-light"
              style={{ textDecoration: 'none' }}
            >
              <motion.div>
                <motion.span
                  initial={{ opacity: 0, x: -150 }}
                  transition={{ duration: 2 }}
                  whileInView={{ opacity: 1, x: 0, color: '#f8cf40' }}
                >
                  A
                </motion.span>
                ttention
              </motion.div>
              <motion.div>
                <motion.span
                  initial={{ opacity: 0, x: -125 }}
                  transition={{ duration: 2.5 }}
                  whileInView={{ opacity: 1, x: 0, color: '#f8cf40' }}
                >
                  T
                </motion.span>
                o
              </motion.div>
              <motion.div>
                <motion.span
                  initial={{ opacity: 0, x: -100 }}
                  transition={{ duration: 3 }}
                  whileInView={{ opacity: 1, x: 0, color: '#f8cf40' }}
                >
                  D
                </motion.span>
                etail
              </motion.div>
            </a>
          </h1>
        </Col>
      </Row>
      <Row className="text-center justify-content-center pt-2">
        <Col className="text-light pb-2">
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
