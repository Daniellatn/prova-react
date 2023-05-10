import 'bootstrap/dist/css/bootstrap.min.css';
import { FiZoomIn } from 'react-icons/fi';
import Pagina from '@/components/Pagina'
import React from 'react'
import { Container, Row, Table } from 'react-bootstrap';
import apiArtic from '@/service/apiArtic';
import Link from 'next/link';

const index = ({ obras }) => {
  return (
    <>
      <Pagina titulo="Obras de Arte" />
      <Container>
        <Row className='mt-3'>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Detalhes</th>
                <th>Título</th>
                <th>Artista</th>
                <th>Departamento</th>
              </tr>
            </thead>
            <tbody>
              {obras.map(item => (
                <tr key={item.id}>
                  <td className='text-center'>
                    <Link href={'/obras/' + item.id}>
                      <FiZoomIn ></FiZoomIn>
                    </Link>
                  </td>
                  <td> {item.title} </td>
                  <td> {item.artist_title} </td>
                  <td> {item.department_title} </td>
                </tr>
              ))}

            </tbody>
          </Table>
        </Row>

      </Container>
    </>
  )
}

export default index

export async function getServerSideProps(context) {

  const resultado = await apiArtic.get('/artworks')
  const obras = resultado.data.data

  return {
    props: { obras },
  }
}