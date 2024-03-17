import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { motion } from 'framer-motion'

function Services() {
  return (
    <>
      <section id="services" className="container pb-5 mb-5">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8 }}
            whileInView={{ y: 0, opacity: 1 }}
          >
            <h1 className="text-primary mt-3 pt-5">Services</h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            transition={{ duration: 1 }}
            whileInView={{ y: 0, opacity: 1 }}
          >
            <p className="lead text-light mb-4 pb-5 pt-4">
              Checkout the services we offer before reaching out for a quote!
            </p>
          </motion.div>
        </div>
        <Container fluid="lg">
          <Row className="justify-content-center align-items-center">
            <Col xs={12} md={6}>
              <motion.img
                src="https://atd-decorators.co.nz/static/20210316_153408-f71593f2203bcf6095c70c178f5dd80a.jpg"
                className="img-fluid"
                style={{ borderRadius: '5%' }}
                alt=""
                initial={{ opacity: 0, x: -20 }}
                transition={{ duration: 1 }}
                whileInView={{ x: 0, opacity: 1 }}
              />
            </Col>
            <Col xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                transition={{ duration: 1 }}
                whileInView={{ x: 0, opacity: 1 }}
              >
                <h2 className="text-primary pt-3">New Builds</h2>
                <p className="lead text-light pb-3">
                  Whether you need a fresh coat of paint to spruce up your
                  exisiting home or colour advice to shape your new one.
                  Attention to Detail Decorators are here for all of your
                  interior & exterior painting needs.
                </p>
              </motion.div>
            </Col>
          </Row>
          <Row className="justify-content-center align-items-center reverse-col">
            <Col xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                transition={{ duration: 1 }}
                whileInView={{ x: 0, opacity: 1 }}
              >
                <h2 className="text-primary pt-3">Renovations</h2>
                <p className="lead text-light pb-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
                  repudiandae quas sapiente magni ea quod tempora, ut
                  voluptatibus vel provident nobis laboriosam at eum, optio
                  molestiae. Adipisci nesciunt delectus, necessitatibus esse
                  perferendis doloremque magni, est cum distinctio, consequatur
                  praesentium voluptatem!
                </p>
              </motion.div>
            </Col>
            <Col xs={12} md={6}>
              <motion.img
                src="https://atd-decorators.co.nz/static/20210316_151036-8ed556b3d31fbcc3362ca47516170222.jpg"
                className="img-fluid"
                style={{ borderRadius: '5%' }}
                alt=""
                initial={{ opacity: 0, x: 20 }}
                transition={{ duration: 1 }}
                whileInView={{ x: 0, opacity: 1 }}
              />
            </Col>
          </Row>
          <Row className="justify-content-center align-items-center">
            <Col xs={12} md={6}>
              <motion.img
                src="https://atd-decorators.co.nz/static/20210422_142201-e03303898ede8ce2fe0d4811632af8b3.jpg"
                className="img-fluid"
                style={{ borderRadius: '5%' }}
                alt=""
                initial={{ opacity: 0, x: -20 }}
                transition={{ duration: 1 }}
                whileInView={{ x: 0, opacity: 1 }}
              />
            </Col>
            <Col xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                transition={{ duration: 1 }}
                whileInView={{ x: 0, opacity: 1 }}
              >
                <h2 className="text-primary pt-3">Waterblasting</h2>
                <p className="lead text-light pb-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
                  repudiandae quas sapiente magni ea quod tempora, ut
                  voluptatibus vel provident nobis laboriosam at eum, optio
                  molestiae. Adipisci nesciunt delectus, necessitatibus esse
                  perferendis doloremque magni, est cum distinctio, consequatur
                  praesentium voluptatem!
                </p>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Services
