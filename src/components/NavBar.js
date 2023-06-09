import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo1 from '../assets/img/ENSMR PATRIMONY.svg'
import { Link } from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      if(window.scrollY > document.getElementById('home').offsetHeight){
        setActiveLink('departements');
      }
      if(window.scrollY + 70< document.getElementById('home').offsetHeight){
        setActiveLink('home');
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }
  const handleHomeClick = () => {
    window.scrollTo({ top: document.getElementById("home").offsetTop, behavior: 'smooth' });
    setActiveLink('home');
  }
  const handleProjectsClick = () => {
    setActiveLink('departements');
    window.scrollTo({ top: document.getElementById("project").offsetTop, behavior: 'smooth' });
    
  }
  

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo1} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => handleHomeClick()}>Home</Nav.Link>
            <Nav.Link as={Link} to="/projects" className={activeLink === 'departements' ? 'active navbar-link' : 'navbar-link'} onClick={() => handleProjectsClick()}>Départements</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
