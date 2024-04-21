import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import emailjs from '@emailjs/browser'
import { useState, useEffect, useRef, ChangeEvent, FormEvent } from 'react'

import { motion, animate, stagger, useInView } from 'framer-motion'
import {
  UserIcon,
  BookOpenIcon,
  ChatBubbleBottomCenterTextIcon,
} from '@heroicons/react/24/solid'

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

  const contact = useRef(null)
  const icons = useRef(null)

  const contactInView = useInView(contact)
  const iconsInView = useInView(icons)

  useEffect(() => {
    if (contactInView) {
      animate(
        '.animate-contact',
        { opacity: 1, y: 0 },
        { duration: 0.5, delay: stagger(0.2), ease: 'circOut' }
      )
    } else {
      animate('.animate-contact', { opacity: 0, y: -10 }, { duration: 0 })
    }
  }, [contactInView])

  useEffect(() => {
    if (iconsInView) {
      animate(
        '.animate-form-and-icons',
        { opacity: 1, x: 0 },
        {
          duration: 0.5,
          delay: stagger(0.2, { startDelay: 0.1 }),
          ease: 'circOut',
        }
      )
    } else {
      animate(
        '.animate-form-and-icons',
        { opacity: 0, x: -10 },
        { duration: 0 }
      )
    }
  }, [iconsInView])

  return (
    <>
      <section id="contact" className="container mt-5">
        <div className="text-center" ref={contact}>
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.5 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="animate-contact"
          >
            <h1 className="text-primary mt-3 pt-5">Contact us!</h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.5 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="animate-contact"
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
            <Col xs={12} md={6} ref={icons}>
              <Form
                onSubmit={handleEmailSubmit}
                data-bs-theme="dark"
                className="text-light pt-3 animate-form-and-icons"
              >
                <FloatingLabel
                  controlId="floatingName"
                  label={
                    <span className="input-group">
                      <UserIcon className="h-5 w-5 contact-icon" />
                      <span className="px-2">Name</span>
                    </span>
                  }
                  className="mb-3"
                >
                  <Form.Control
                    name="name"
                    type="name"
                    placeholder="Name"
                    required
                    value={formData.name}
                    onChange={handleFormInputChange}
                    aria-describedby="nameHelp"
                  />
                  <Form.Text id="nameHelp" className="px-2" muted>
                    Enter first and/or last name
                  </Form.Text>
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingInput"
                  label={
                    <span className="input-group">
                      <i className="bi bi-envelope-at-fill h-6 w-6 px-1 contact-icon" />
                      <span className="px-2">Email</span>
                    </span>
                  }
                  className="mb-3"
                >
                  <Form.Control
                    name="email"
                    type="email"
                    placeholder="name@example.com"
                    required
                    value={formData.email}
                    onChange={handleFormInputChange}
                    aria-describedby="emailHelp"
                  />
                  <Form.Text id="emailHelp" className="px-2" muted>
                    Enter a valid email address, e.g: example@gmail.com
                  </Form.Text>
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingNumber"
                  label={
                    <span className="input-group">
                      <i className="bi bi-phone-fill h-6 w-6 px-1 contact-icon" />
                      <span className="px-2">Phone</span>
                    </span>
                  }
                  className="mb-3"
                >
                  <Form.Control
                    name="number"
                    type="phone"
                    placeholder="Number"
                    required
                    pattern="(\+?\d+)"
                    value={formData.number}
                    onChange={handleFormInputChange}
                    aria-describedby="numberHelp"
                  />
                  <Form.Text id="numberHelp" className="px-2" muted>
                    Enter a valid phone number (+ sign & numbers only)
                  </Form.Text>
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingSubjectMatter"
                  label={
                    <span className="input-group">
                      <BookOpenIcon className="h-5 w-5 contact-icon" />
                      <span className="px-2">Subject</span>
                    </span>
                  }
                  className="mb-3"
                >
                  <Form.Control
                    name="subject"
                    type="subject"
                    placeholder="Subject Matter"
                    required
                    value={formData.subject}
                    onChange={handleFormInputChange}
                    aria-describedby="subjectHelp"
                  />
                  <Form.Text id="subjectHelp" className="px-2" muted>
                    Enter the subject matter this is regarding
                  </Form.Text>
                </FloatingLabel>

                <FloatingLabel
                  controlId="floatingTextarea"
                  label={
                    <span className="input-group">
                      <ChatBubbleBottomCenterTextIcon className="h-5 w-5 contact-icon" />
                      <span className="px-2">Message</span>
                    </span>
                  }
                  className="mb-3"
                >
                  <Form.Control
                    name="message"
                    as="textarea"
                    placeholder="Leave a comment here"
                    required
                    value={formData.message}
                    onChange={handleFormInputChange}
                    aria-describedby="messageHelp"
                    style={{ height: '10rem' }}
                  />
                  <Form.Text id="messageHelp" className="px-2" muted>
                    Enter your message you have for me
                  </Form.Text>
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
            </Col>

            <Col className="text-center pt-5">
              <h1 className="text-light pb-3 pt-3 animate-form-and-icons">
                Links
              </h1>
              <Col xs={12} md={12} className="pb-3 animate-form-and-icons">
                <motion.div whileHover={{ scale: 1.1, opacity: 0.5 }}>
                  <a href="tel: 027 312 9323" aria-label="telephone number">
                    <i className="bi bi-phone display-6 contact-icon">
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
                </motion.div>
              </Col>
              <Col xs={12} md={12} className="pb-3 animate-form-and-icons">
                <motion.div whileHover={{ scale: 1.1, opacity: 0.5 }}>
                  <a
                    href="mailto: atd.decorators@gmail.com"
                    aria-label="link to email"
                    target="_blank"
                    rel="noreferrer"
                    className="lead"
                    style={{ textDecoration: 'none' }}
                  >
                    <i
                      className="bi bi-envelope-at display-6 contact-icon"
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
                </motion.div>
              </Col>
              <Col xs={12} md={12} className="pb-3 animate-form-and-icons">
                <motion.div whileHover={{ scale: 1.1, opacity: 0.5 }}>
                  <a
                    href="https://www.facebook.com/attentiontodetaildecoratorsltd"
                    aria-label="link to facebook page"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bi bi-facebook display-6 contact-icon">
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
                </motion.div>
              </Col>
              <Col xs={12} md={12} className="pb-3 animate-form-and-icons">
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    opacity: 0.5,
                  }}
                >
                  <a
                    href="https://www.instagram.com/attentiontodetail_decorators/"
                    aria-label="link to instagram page"
                    target="_blank"
                    rel="noreferrer"
                    className="lead"
                    style={{ textDecoration: 'none' }}
                  >
                    <i
                      className="bi bi-instagram display-6 contact-icon"
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
                </motion.div>
              </Col>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Contact
