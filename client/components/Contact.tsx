import { Container, Row, Col, FloatingLabel, Form } from 'react-bootstrap'
import { useState, useEffect, useRef, ChangeEvent, FormEvent } from 'react'
import { motion, animate, stagger, useInView } from 'framer-motion'

import emailjs from '@emailjs/browser'
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

  const contactInView = useInView(contact, { once: true })
  const iconsInView = useInView(icons, { once: true })

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
      <section
        id="contact"
        className="bg-[#c1c7c7] m-4 pt-2 pb-4 rounded-2xl shadow-2xl"
      >
        <div className="text-left px-24" ref={contact}>
          <div className="animate-contact">
            <h1 className="secondary-header mt-4 pb-2 text-black text-[3.2rem] md:text-6xl 2xl:text-7xl">
              Contact us!
            </h1>
          </div>
          <div className="animate-contact">
            <p className="roboto-paragraph text-lg md:text-xl 2xl:text-2xl">
              Questions? Fill out the form to contact ATD directly!
            </p>
            <p className="roboto-paragraph text-lg md:text-xl 2xl:text-2xl pb-10">
              Alternatively, if you would like to get in touch, ask a question,
              or make an enquiry, here are our details:
            </p>
          </div>
        </div>
        <Container fluid="lg">
          <Row>
            <Col xs={12} md={6} ref={icons}>
              <Form
                onSubmit={handleEmailSubmit}
                className="text-lg pt-10 mb-4 animate-form-and-icons bg-[#dfd4ce] border border-black p-10 rounded-2xl shadow-2xl"
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
                    className="text-white w-[350px] sm:w-[230px] rounded shadow-2xl bg-[#006cc1] transition-all duration-1000 hover:bg-[#006dc1a4] mt-4 px-5 py-3"
                    type="submit"
                    whileHover={{
                      scale: 1.05,
                    }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                  >
                    <span className="">Submit message</span>
                  </motion.button>
                </motion.div>
              </Form>
            </Col>

            <Col className="text-center">
              <h1 className="secondary-header pb-3 text-black text-[3.2rem] md:text-5xl 2xl:text-7xl animate-form-and-icons">
                Links
              </h1>
              <Col xs={12} md={12} className="pb-3 animate-form-and-icons">
                <motion.div whileHover={{ scale: 1.1, opacity: 0.5 }}>
                  <a href="tel: 027 312 9323" aria-label="telephone number">
                    <button
                      className="-mx-4"
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
                      <span className="roboto-paragraph text-black text-lg md:text-xl 2xl:text-2xl px-2">
                        +64 27-312-9323
                      </span>
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
                      className="-mx-2"
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
                      <span className="roboto-paragraph text-black text-lg md:text-xl 2xl:text-2xl px-2">
                        Send me an email
                      </span>
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
                    className=""
                    style={{
                      textDecoration: 'none',
                      display: 'inline-flex',
                    }}
                  >
                    <button
                      className=""
                      style={{
                        textDecoration: 'none',
                        border: 'none',
                        background: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                      }}
                    >
                      <img src={facebookIcon} alt="Facebook logo" />
                      <span className="roboto-paragraph text-black text-lg md:text-xl 2xl:text-2xl px-2">
                        Facebook Message
                      </span>
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
                      className=""
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
                      <span className="roboto-paragraph text-black text-lg md:text-xl 2xl:text-2xl">
                        Instagram Message
                      </span>
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
