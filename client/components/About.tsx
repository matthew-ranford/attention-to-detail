import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { motion } from 'framer-motion'

function About() {
  return (
    <>
      <section id="about" className=" background">
        <Container fluid="lg" className="pt-5 pb-5">
          <Row className="justify-content-center align-items-center reverse-col">
            <Col xs={12} md={6} className="lead text-light pt-5 mt-5">
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                transition={{ duration: 1 }}
                whileInView={{ x: 0, opacity: 1 }}
              >
                <p>
                  Whether you need a fresh coat of paint to spruce up your
                  exisiting home or colour advice to shape your new one.
                  Attention to Detail Decorators are here for all of your
                  interior & exterior painting needs.
                </p>
                <p>
                  Our founder Corey Daken has been working in the industry for
                  over 10 years bringing a range of experience with him. His
                  work has involved collaboarting with architects, interior
                  designers, construction companies and home owners to meet the
                  results that his clients desire.
                </p>
                <p>The ATD team work all across the Wellington region.</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 1 }}
                whileInView={{ y: 0, opacity: 1 }}
              >
                <Button variant="primary" className="px-3 py-2 mt-3">
                  Get a Quote
                </Button>
              </motion.div>
            </Col>

            <Col xs={12} md={6} className="reverse-col">
              <motion.div
                initial={{ opacity: -10 }}
                transition={{ duration: 2 }}
                whileInView={{ opacity: 1 }}
              >
                <motion.img
                  src="client/images/atd-logo.png"
                  className="img-fluid"
                  alt="Company logo"
                  initial={{ opacity: -1, scale: 25 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 2,
                  }}
                />
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default About
