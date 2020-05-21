import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

import { Col, Row, Container, Table, Carousel } from 'react-bootstrap'

import Img1 from '../../images/Pathopouch/pathopouch1.jpg'
import Img2 from '../../images/Pathopouch/pathopouch2.jpg'

import '../../i18n'
import { useTranslation } from 'react-i18next'

import ReactDOM from 'react-dom'

function Content(prop){
  const { t, i18n } = useTranslation();
  return(
    <>
      <h3>Features</h3>
      <ul>
        <li>{t("products.pathopak.features.list1")}</li>
        <li>{t("products.pathopak.features.list2")}</li>
        <li>{t("products.pathopak.features.list3")}</li>
        <li>{t("products.pathopak.features.list4")}</li>
        <li>{t("products.pathopak.features.list5")}</li>
        <li>{t("products.pathopak.features.list6")}</li>
      </ul>
    </>
  )
}

function TableContent(prop){
  const { t, i18n } = useTranslation();
  return(
    <>
      <Table striped bordered hover style={{marginTop: "50px"}}>
        <thead>
        <tr>
        <th rowSpan={2}>Type</th>
        <th colSpan={3}>Dimension (Outer)</th>
        <th colSpan={2}>Dimension (Inner)</th>
        <th rowSpan={2}>MOQ</th>
        </tr>
        <tr>
        <td>Length</td>
        <td>Width</td>
        <td>Height</td>
        <td>Diameter</td>
        <td>Height</td>
        </tr>
        </thead>
        <tbody>
        <tr>
        <td>Pathopak 1Ltr</td>
        <td>11</td>
        <td>11.5</td>
        <td>19</td>
        <td>9</td>
        <td>17.5</td>
        <td>10</td>
        </tr>
        <tr>
        <td>Pathopak 2Ltr</td>
        <td>15.5</td>
        <td>16</td>
        <td>19</td>
        <td>12.5</td>
        <td>18</td>
        <td>5</td>
        </tr>
        <tr>
        <td>Pathopak 3Ltr</td>
        <td>16</td>
        <td>16.5</td>
        <td>28</td>
        <td>12.5</td>
        <td>26.5</td>
        <td>5</td>
        </tr>
        </tbody>
      </Table>
    </>
  )
}

const IndexPage = () => {
  const { t, i18n } = useTranslation();
  return(
  <Layout>
    <SEO title="DGP PATHOPAK" />
    <Container className="main-container">
      <Row>
        <Col>
          <h2>{t("products.pathopak.title")}</h2>
          <TableContent />
        </Col>
      </Row>
    </Container>
    <Container fluid={true} className="fluid-gray">
      <Container>
        <Row>
          <Col>
            <Content />
          </Col>
        </Row>
      </Container>
    </Container>
  </Layout>
)}

export default IndexPage
