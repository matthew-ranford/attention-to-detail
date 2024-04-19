import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import emailjs from '@emailjs/browser'
import { useState, ChangeEvent, FormEvent } from 'react'

import { motion } from 'framer-motion'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    subject: '',
    message: '',
  })

  const handleFormInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleEmailSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const { name, email, number, subject, message } = formData
    if (!name || !email || !number || !subject || !message) {
      console.log('Please fill in all fields')
      return
    }

    const templateParams = {
      name: name,
      email: email,
      number: number,
      subject: subject,
      message: message,
    }

    emailjs.init('3F64Uwf82y_srndD5')
    emailjs
      .send('service_atd', 'template_atd', templateParams)
      .then((response) => {
        console.log('Form submitted successfully:', response)
        alert('Form submitted successfully')
        setFormData({
          name: '',
          email: '',
          number: '',
          subject: '',
          message: '',
        })
      })
      .catch((error) => {
        console.error('Error submitting form:', error)
        alert('Failed to submit form, please try again later')
      })
  }

  return (
    <>
      <section id="contact" className="container mt-5">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.5 }}
            whileInView={{ y: 0, opacity: 1 }}
          >
            <h1 className="text-primary mt-3 pt-5">Contact us!</h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.5 }}
            whileInView={{ y: 0, opacity: 1 }}
          >
            <p className="lead text-light pt-4">
              Questions? Fill out the form to contact me directly!
            </p>
            <p className="lead text-light mb-4 pb-5 pt-4">
              Alternatively, message or call Corey at one of the links below!
            </p>
          </motion.div>
        </div>
        <Container fluid="lg">
          <Row>
            <Col xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0 }}
                transition={{ duration: 1.5 }}
                whileInView={{ opacity: 1 }}
              >
                <Form onSubmit={handleEmailSubmit}>
                  <FloatingLabel
                    controlId="floatingName"
                    label="Name"
                    className="mb-3"
                  >
                    <Form.Control
                      name="name"
                      type="name"
                      placeholder="Name"
                      required
                      value={formData.name}
                      onChange={handleFormInputChange}
                    />
                  </FloatingLabel>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Email address"
                    className="mb-3"
                  >
                    <Form.Control
                      name="email"
                      type="email"
                      placeholder="name@example.com"
                      required
                      value={formData.email}
                      onChange={handleFormInputChange}
                    />
                  </FloatingLabel>
                  <FloatingLabel
                    controlId="floatingNumber"
                    label="Phone"
                    className="mb-3"
                  >
                    <Form.Control
                      name="number"
                      type="phone"
                      placeholder="Number"
                      required
                      value={formData.number}
                      onChange={handleFormInputChange}
                    />
                  </FloatingLabel>
                  <FloatingLabel
                    controlId="floatingSubjectMatter"
                    label="Subject"
                    className="mb-3"
                  >
                    <Form.Control
                      name="subject"
                      type="subject"
                      placeholder="Subject Matter"
                      required
                      value={formData.subject}
                      onChange={handleFormInputChange}
                    />
                  </FloatingLabel>

                  <FloatingLabel
                    controlId="floatingTextarea"
                    label="Message"
                    className="mb-3"
                  >
                    <Form.Control
                      name="message"
                      as="textarea"
                      placeholder="Leave a comment here"
                      required
                      value={formData.message}
                      onChange={handleFormInputChange}
                      style={{ height: '10rem' }}
                    />
                  </FloatingLabel>
                  <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.5 }}
                    whileInView={{ y: 0, opacity: 1 }}
                  >
                    <Button
                      variant="primary"
                      className="px-3 py-2 mb-3 mt-3"
                      type="submit"
                    >
                      Submit
                    </Button>
                  </motion.div>
                </Form>
              </motion.div>
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
