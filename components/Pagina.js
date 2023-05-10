import React from 'react'
import { Container } from 'react-bootstrap'
import NavbarPrincipal from './NavbarPrincipal'

const Pagina = (props) => {
  return (
    <>
      <NavbarPrincipal />
      <div className='bg-light text-dark py-3 text-center'>
        <Container>
          <h1> {props.titulo} </h1>
        </Container>
      </div>

      {props.children}
    </>
  )
}

export default Pagina