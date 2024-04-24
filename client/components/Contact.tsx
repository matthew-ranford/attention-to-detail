import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'

import emailjs from '@emailjs/browser'
import { useState, useEffect, useRef, ChangeEvent, FormEvent } from 'react'

import { motion, animate, stagger, useInView } from 'framer-motion'
import {
  UserIcon,
  BookOpenIcon,
  ChatBubbleBottomCenterTextIcon,
} from '@heroicons/react/24/solid'

import phoneIcon from '../images/phone-icon.png'
import emailIcon from '../images/gmail-icon.png'
import facebookIcon from '../images/facebook-icon.png'
import instagramIcon from '../images/instagram-icon.png'

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
            <h1 className="text-primary mt-3 pt-5 text-6xl">Contact us!</h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.5 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="animate-contact"
          >
            <p className="text-3xl text-light pt-4 font-medium">
              Questions? Fill out the form to contact me directly!
            </p>
            <p className="text-3xl text-light mb-4 pb-5 pt-4 font-medium">
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
                className="text-light text-lg pt-3 animate-form-and-icons"
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
                    Enter valid email address, e.g: example@gmail.com
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
                    Enter valid phone number (+ sign optional & numbers)
                  </Form.Text>
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingSubjectMatter"
                  label={
                    <span className="input-group">
                      <BookOpenIcon className="h-5 w-5 contact-icon mt-1" />
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
                      <ChatBubbleBottomCenterTextIcon className="h-5 w-5 contact-icon mt-1" />
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
                  <motion.button
                    className="btn btn-primary px-3 py-2 mb-3 mt-3"
                    type="submit"
                    whileHover={{
                      scale: 1.15,
                      boxShadow: '0px 0px 7px rgb(255, 255, 255)',
                      textShadow: '0px 0px 7px rgb(0, 0, 0)',
                    }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                  >
                    <span className="text-xl font-medium">Submit</span>
                  </motion.button>
                </motion.div>
              </Form>
            </Col>

            <Col className="text-center pt-5">
              <h1 className="text-primary text-4xl pb-3 pt-5 animate-form-and-icons">
                Links
              </h1>
              <Col xs={12} md={12} className="pb-3 animate-form-and-icons">
                <motion.div whileHover={{ scale: 1.1, opacity: 0.5 }}>
                  <a href="tel: 027 312 9323" aria-label="telephone number">
                    <button
                      className="text-secondary px-3 lead"
                      style={{
                        textDecoration: 'none',
                        border: 'none',
                        background: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        marginRight: '0.3rem',
                      }}
                    >
                      <img src={phoneIcon} alt="Mobile logo" />
                      <span className="px-2">+64 27-312-9323</span>
                    </button>
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
                    style={{ textDecoration: 'none', display: 'inline-flex' }}
                  >
                    <button
                      className="text-secondary"
                      style={{
                        textDecoration: 'none',
                        border: 'none',
                        background: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        marginRight: '0.4rem',
                      }}
                    >
                      <img src={emailIcon} alt="Gmail logo" />
                      <span className="px-2">Email me directly</span>
                    </button>
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
                    className="lead"
                    style={{
                      textDecoration: 'none',
                      display: 'inline-flex',
                    }}
                  >
                    <button
                      className="text-secondary"
                      style={{
                        textDecoration: 'none',
                        border: 'none',
                        background: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                      }}
                    >
                      <img src={facebookIcon} alt="Facebook logo" />
                      <span className="px-2">Facebook Message</span>
                    </button>
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
                    style={{
                      textDecoration: 'none',
                      display: 'inline-flex',
                    }}
                  >
                    <button
                      className="text-secondary"
                      style={{
                        textDecoration: 'none',
                        border: 'none',
                        background: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                      }}
                    >
                      <img
                        src={instagramIcon}
                        alt="Instagram logo"
                        style={{ marginRight: '8px' }}
                      />
                      <span>Instagram Message</span>
                    </button>
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
