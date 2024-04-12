import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { motion } from 'framer-motion'

import logo from '../images/atd-logo.png'

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
      duration: 0.9,
    },
  },
}

const navLinks = [
  { href: '#about', text: 'About' },
  { href: '#services', text: 'Services' },
  { href: '#projects', text: 'Projects' },
  { href: '#gallery', text: 'Gallery' },
  { href: '#contact', text: 'Contact' },
]

function Navigation() {
  return (
    <>
      {['md'].map((expand) => (
        <Navbar key={expand} expand={false} collapseOnSelect>
          <Container fluid="lg">
            <Navbar.Brand href="#">
              <img src={logo} alt="Attention To Detail Logo" width={100} />
            </Navbar.Brand>
            <motion.div>
              <Navbar.Toggle
                aria-controls="responsive-navbar-nav"
                className="px-4"
              >
                <motion.i
                  className="bi bi-justify display-6"
                  style={{ color: '#ffb700' }}
                  whileHover={{ textShadow: '0px 0px 5px rgb(0, 0, 0)' }}
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
              <Navbar.Toggle
                aria-controls="responsive-navbar-nav"
                style={{ backgroundColor: '#2b2b2b' }}
              >
                <Navbar.Brand>
                  <motion.div
                    initial={{ opacity: 0 }}
                    transition={{ ease: 'easeInOut', duration: 1.8 }}
                    animate={{ opacity: 1 }}
                    style={{ backgroundColor: '#2b2b2b' }}
                  >
                    <motion.h1
                      className="text-end display-6 pe-1"
                      style={{ color: '#ffb700' }}
                      whileHover={{
                        textShadow: '0px 0px 5px #ffb700',
                      }}
                    >
                      Close
                    </motion.h1>
                    <motion.img
                      src={logo}
                      className="img-fluid "
                      style={{ height: '200px', margin: 'auto' }}
                      alt="Company Logo"
                      initial={{ y: -100, scale: 0 }}
                      transition={{ duration: 0.7 }}
                      animate={{ y: 0, scale: 1 }}
                    />
                  </motion.div>
                </Navbar.Brand>
              </Navbar.Toggle>
              <Offcanvas.Body
                className="text-center px-2 background"
                style={{ backgroundColor: '#272727' }}
              >
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  {navLinks.map((link, index) => (
                    <Nav.Link key={index} href={link.href} className="nav-link">
                      <motion.div
                        variants={listVariants}
                        initial="hidden"
                        animate="visible"
                        className="text-light"
                      >
                        <motion.li
                          className="display-6"
                          whileHover={{ color: 'rgb(0, 0, 0, 0.9)' }}
                        >
                          {link.text}
                        </motion.li>
                      </motion.div>
                    </Nav.Link>
                  ))}
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
