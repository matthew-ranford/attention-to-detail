import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap'
import { motion } from 'framer-motion'

import logo from '../images/logo.png'

const listVariants = {
  hidden: {
    y: -20,
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
      {['sm'].map((expand) => (
        <Navbar key={expand} expand={'md'} collapseOnSelect>
          <Container fluid="lg" className="pt-8">
            <Navbar.Brand href="#"></Navbar.Brand>
            <motion.div>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
                aria-label="navbar toggle button"
                className="px-4"
              >
                <motion.i
                  className="bi bi-justify display-6"
                  style={{ color: '#006cc1' }}
                  whileHover={{ textShadow: '0px 0px 5px rgb(0, 0, 0)' }}
                ></motion.i>
              </Navbar.Toggle>
            </motion.div>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              placement="end"
              restoreFocus={false}
              style={{ width: '100%' }}
            >
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
                aria-label="navar toggle button"
              >
                <Navbar.Brand>
                  <motion.div
                    initial={{ opacity: 0 }}
                    transition={{ ease: 'easeInOut', duration: 1.8 }}
                    animate={{ opacity: 1 }}
                    style={{ backgroundColor: '#FFF' }}
                  >
                    <motion.h1
                      className="text-end display-6 pt-4"
                      style={{ color: '#006cc1' }}
                      whileHover={{
                        textShadow: '0px 0px 5px ##005cc2',
                      }}
                    >
                      Close
                    </motion.h1>
                    {/* <motion.img
                      src={logo}
                      className="img-fluid "
                      style={{ height: '200px', margin: 'auto' }}
                      alt="Company Logo"
                      initial={{ y: -100, scale: 0 }}
                      transition={{ duration: 0.7 }}
                      animate={{ y: 0, scale: 1 }}
                    /> */}

                    <motion.img
                      src={logo}
                      alt="Attention To Detail Logo"
                      width="400px"
                      loading="eager"
                      decoding="async"
                      className="img-fluid"
                      style={{ margin: 'auto' }}
                      initial={{ y: -100, scale: 0 }}
                      transition={{ duration: 0.7 }}
                      animate={{ y: 0, scale: 1 }}
                    />
                  </motion.div>
                </Navbar.Brand>
              </Navbar.Toggle>
              <Offcanvas.Body className="text-center px-2">
                <Nav className="w-100 justify-content-end align-items-center gap-3">
                  {navLinks.map((link, index) => (
                    <Nav.Link key={index} href={link.href} className="nav-link">
                      <motion.div
                        variants={listVariants}
                        initial="hidden"
                        animate="visible"
                        className="text-dark"
                      >
                        {link.text === 'Contact' ? (
                          <motion.button
                            className="text-white rounded bg-[#006cc1] transition-all duration-1000 hover:bg-[#006dc1a4] px-4 py-2"
                            style={{ fontSize: '17px' }}
                            whileHover={{ scale: 1.05 }}
                          >
                            {link.text}
                          </motion.button>
                        ) : (
                          <motion.li
                            style={{ fontSize: '17px' }}
                            whileHover={{ scale: 1.02, opacity: 0.5 }}
                          >
                            {link.text}
                          </motion.li>
                        )}
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
