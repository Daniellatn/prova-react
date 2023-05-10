import 'bootstrap/dist/css/bootstrap.min.css';
import { FiExternalLink, FiArrowLeftCircle } from "react-icons/fi";
import Pagina from '@/components/Pagina'
import apiArtic from '@/service/apiArtic'
import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import Link from 'next/link';

const DetalhesObra = ({ detalhesObra }) => {

  return (
    <>
      <Pagina titulo={detalhesObra.title} />
      <Container>
        <Row className='mt-5'>
          {
            detalhesObra.image_id &&
            <Col md={4}>
              <Card className='border border-secondary'>
                <Card.Header className='bg-dark text-white' as="h6">Imagem</Card.Header>
                <Card.Body>
                  <Card.Img variant="top" src={'https://www.artic.edu/iiif/2/' + detalhesObra.image_id + '/full/843,/0/default.jpg'} />
                  <Link
                    className='btn btn-primary mt-3'
                    href={'https://www.artic.edu/iiif/2/' + detalhesObra.image_id + '/full/843,/0/default.jpg'}
                    target="_blank">
                    Ampliar <FiExternalLink />
                  </Link>
                </Card.Body>
              </Card>
              
            </Col>
          }
          <Col md={8}>
            <Card className='border border-secondary'>
              <Card.Header className='bg-dark text-white' as="h6"> {detalhesObra.title} </Card.Header>
              <Card.Body>
                <Card.Text>
                  <strong>Artista: </strong> {detalhesObra.artist_title}
                </Card.Text>
                <Card.Text>
                  <strong>Departamento: </strong> {detalhesObra.department_title}
                </Card.Text>
                <Card.Text>
                  <strong>Origem: </strong> {detalhesObra.place_of_origin}
                </Card.Text>
                <Card.Text>
                  <strong>Dimensões: </strong> {detalhesObra.dimensions}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

        </Row>
        <Link className='btn btn-success mt-3' href={'/obras'}> <FiArrowLeftCircle /> Voltar </Link>
      </Container>
    </>
  )
}

export default DetalhesObra

export async function getServerSideProps(context) {

  const idObra = context.params.idObra
  const resultado = await apiArtic.get('/artworks/' + idObra)
  const detalhesObra = resultado.data.data

  return {
    props: { detalhesObra },
  }
}