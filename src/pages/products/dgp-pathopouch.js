import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

import { Col, Row, Container, Table, Carousel } from 'react-bootstrap'

import Img1 from '../../images/Pathopouch/pathopouch1.jpg'
import Img2 from '../../images/Pathopouch/pathopouch2.jpg'

import '../../i18n'
import { useTranslation } from 'react-i18next'

import ReactDOM from 'react-dom'

function Pathopouch(prop){
  return(
    <>
      <h2>DGP PATHOPOUCH 95kPa – IATA (Air) Compliant</h2>
      <Table striped bordered hover style={{marginTop: "40px"}}>
        <thead>
        <tr>
        <th>Type</th>
        <th>INTERNAL DIMENSION (MM)</th>
        <th>EXTERNAL DIMENSION (MM)</th>
        </tr>
        </thead>
        <tbody>
        <tr>
        <td>A4</td>
        <td>L308 X W230</td>
        <td>L355 X W254</td>
        </tr>
        <tr>
        <td>A5</td>
        <td>L230 X W152</td>
        <td>L279 X W177</td>
        </tr>
        </tbody>
      </Table>
    </>
  )
}

function PathopouchImg(prop){
  return(
    <Row>
      <Col md={6}>
        <img className="d-block w-100" src={Img1} />
      </Col>
      <Col md={6}>
        <img className="d-block w-100" src={Img2} />
      </Col>
    </Row>
  )
}

const IndexPage = () => (
  <Layout>
    <SEO title="DGP PATHOPAK" />
    <Container className="main-container">
      <Row>
        <Col>
          <Pathopouch />
        </Col>
      </Row>
    </Container>
    <Container fluid={true} className="fluid-gray">
      <Container>
        <PathopouchImg />
      </Container>
    </Container>
  </Layout>
)

export default IndexPage