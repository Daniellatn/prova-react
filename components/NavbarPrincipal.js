import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const NavbarPrincipal = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Obras de Arte</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/obras">Obras</Nav.Link>
            <Nav.Link href="/tipos-obras">Tipo de Arte</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default NavbarPrincipal