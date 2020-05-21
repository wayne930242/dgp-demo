import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

import { Col, Row, Container, Table, Carousel } from 'react-bootstrap'

import Img1 from '../../images/cold-packs/photo1.jpg'
import Img2 from '../../images/cold-packs/photo2.jpg'
import Img3 from '../../images/cold-packs/photo3.jpg'

import '../../i18n'
import { useTranslation } from 'react-i18next'

import ReactDOM from 'react-dom'

function Content(prop){
  const { t, i18n } = useTranslation();
  return(
    <>
      <h2>Cold Packs</h2>
      <Table striped bordered hover style={{marginTop: "40px"}}>
        <thead>
        <tr>
        <th>Type</th>
        <th>MOQ</th>
        </tr>
        </thead>
        <tbody>
        <tr>
        <td>Jel Pack 1515</td>
        <td>5</td>
        </tr>
        </tbody>
      </Table>
    </>
  )
}

const IndexPage = () => (
  <Layout>
    <SEO title="COLD PACKS" />
    <Container className="main-container">
      <Row>
        <Col>
          <Content />
        </Col>
      </Row>
    </Container>
    <Container fluid={true} className="fluid-gray">
      <Container>
        <Row>
          <Col lg={4} md={6}>
            <img style={{padding: "20px 20px 20px 20px", width:"100%", height:"auto"}} src={Img1} />
          </Col>
          <Col lg={4} md={6}>
            <img style={{padding: "20px 20px 20px 20px", width:"100%", height:"auto"}} src={Img2} />
          </Col>
          <Col lg={4} md={6}>
            <img style={{padding: "20px 20px 20px 20px", width:"100%", height:"auto"}} src={Img3} />
          </Col>
        </Row>
      </Container>
    </Container>
  </Layout>
)

export default IndexPage
