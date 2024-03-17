import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { motion } from 'framer-motion'

import logo from '../images/atd-logo.png'

// TODO:
// Look at changing the font-size of the li items
// Look at mapping through li items and rendering them with the stagger property

const listVariants = {
  hidden: {
    y: -10,
    opacity: 0,
    scale: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
    },
  },
}

const iconVariant = {
  initial: { rotate: -90 },
  animate: {
    rotate: 0,
    transition: { duration: 2 },
  },
}

function Navigation() {
  return (
    <>
      {['md'].map((expand) => (
        <Navbar
          key={expand}
          expand={false}
          collapseOnSelect
          // className="background"
          style={{ background: 'transparent', backdropFilter: 'blur(2px)' }}
          fixed="top"
        >
          <Container fluid="lg">
            <Navbar.Brand href="#">
              <h1 className="text-light">
                <motion.div
                  initial={{ y: -50, opacity: 0, scale: 1.5 }}
                  animate={{ y: 0, opacity: 1, scale: 1 }}
                  transition={{
                    duration: 2,
                  }}
                >
                  <motion.span
                    animate={{ y: 0, opacity: 1, color: '#f8cf40' }}
                    transition={{ duration: 3.5 }}
                  >
                    A
                  </motion.span>
                  ttention
                </motion.div>{' '}
                <motion.div
                  initial={{ opacity: -1, scale: 700 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 1.2,
                  }}
                >
                  <motion.span
                    animate={{ y: 0, opacity: 1, color: '#f8cf40' }}
                    transition={{ duration: 5.5 }}
                  >
                    T
                  </motion.span>
                  o
                </motion.div>{' '}
                <motion.div
                  initial={{ opacity: -1, scale: 2500 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 2,
                  }}
                >
                  <motion.span
                    animate={{ y: 0, opacity: 1, color: '#f8cf40' }}
                    transition={{ duration: 6.5 }}
                  >
                    D
                  </motion.span>
                  etail
                </motion.div>
              </h1>
            </Navbar.Brand>
            <motion.div
              transition={{ ease: 'backInOut', duration: 0.5 }}
              whileHover={{
                x: -3,
              }}
              variants={iconVariant}
              initial="initial"
              animate="animate"
            >
              <Navbar.Toggle
                aria-controls="responsive-navbar-nav"
                className="px-4"
              >
                <motion.i
                  className="bi bi-justify display-6"
                  style={{ color: 'rgb(255, 255, 255)' }}
                ></motion.i>
              </Navbar.Toggle>
            </motion.div>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              restoreFocus={false}
              style={{ width: '100%' }}
            >
              <Navbar.Toggle closeButton aria-controls="responsive-navbar-nav">
                <Navbar.Brand>
                  <motion.div
                    initial={{ opacity: 0 }}
                    transition={{ ease: 'easeInOut', duration: 1.8 }}
                    animate={{ opacity: 1 }}
                    style={{ backgroundColor: 'rgb(0, 0, 0)' }}
                  >
                    <motion.h1
                      className="text-end text-light display-6 pe-1"
                      whileHover={{
                        textShadow: '0px 0px 10px rgb(255, 255, 255)',
                      }}
                    >
                      Close
                    </motion.h1>
                    <motion.img
                      src={logo}
                      className="img-fluid"
                      style={{ height: '200px' }}
                      alt="Company Logo"
                      initial={{ scale: 500 }}
                      transition={{ duration: 0.8 }}
                      animate={{ scale: 1 }}
                    />
                  </motion.div>
                </Navbar.Brand>
              </Navbar.Toggle>
              <Offcanvas.Body className="text-center px-2 background">
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#about" className="nav-link">
                    <motion.div
                      variants={listVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <li className="text-light display-6">About</li>
                    </motion.div>
                  </Nav.Link>
                  <Nav.Link href="#services" className="nav-link">
                    <motion.div
                      variants={listVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <li className="text-light display-6">Services</li>
                    </motion.div>
                  </Nav.Link>
                  <Nav.Link href="#projects" className="nav-link">
                    <motion.div
                      variants={listVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <li className="text-light display-6">Projects</li>
                    </motion.div>
                  </Nav.Link>
                  <Nav.Link href="#gallery" className="nav-link">
                    <motion.div
                      variants={listVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <li className="text-light display-6">Gallery</li>
                    </motion.div>
                  </Nav.Link>
                  <Nav.Link href="#contact" className="nav-link">
                    <motion.div
                      variants={listVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <li className="text-light display-6">Contact</li>
                    </motion.div>
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  )
}

export default Navigation
