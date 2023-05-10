import 'bootstrap/dist/css/bootstrap.min.css';
import Pagina from '@/components/Pagina'
import React from 'react'
import { Container } from 'react-bootstrap';
import apiArtic from '@/service/apiArtic';

const index = ({tiposObras}) => {
  return (
    <>
      <Pagina titulo="Tipos de Arte"/>
      <Container>
        <ul className='mt-3'>
          {tiposObras.map(item => (
            <li key={item.id}>{item.title} 
              (Atualizado em: {item.updated_at})
            </li>
          ))}
        </ul>
      </Container>
    </>
  )
}

export default index

export async function getServerSideProps(context) {

  const resultado = await apiArtic.get('/artwork-types')
  const tiposObras = resultado.data.data

  return {
    props: { tiposObras },
  }
}