import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

import { Col, Row, Container, Table, Carousel } from 'react-bootstrap'

import Img1 from '../../images/BioTherm-Box/photo1.jpg'
import Img2 from '../../images/BioTherm-Box/photo2.jpg'
import Img3 from '../../images/BioTherm-Box/photo3.jpg'
import Img4 from '../../images/BioTherm-Box/photo4.jpg'
import Img5 from '../../images/BioTherm-Box/photo5.jpg'
import Img6 from '../../images/BioTherm-Box/photo6.jpg'
import Img7 from '../../images/BioTherm-Box/photo7.jpg'
import Img8 from '../../images/BioTherm-Box/photo8.jpg'
import Img9 from '../../images/BioTherm-Box/photo9.jpg'

import '../../i18n'
import { useTranslation } from 'react-i18next'

import ReactDOM from 'react-dom'

function Content(prop){
  const { t, i18n } = useTranslation();
  return(
    <>
      <Table striped bordered hover>
      <thead>
        <tr>
        <th>Type</th>
        <th>INTERNAL DIMENSION (MM)</th>
        <th>EXTERNAL DIMENSION (MM)</th>
        <th>DURATION(Hours)</th>
        <th>MOQ</th>
        </tr>
        </thead>
        <tbody>
        <tr>
        <td>BT 5</td>
        <td>170*170*170</td>
        <td>268*273*283</td>
        <td>48</td>
        <td>10</td>
        </tr>
        <tr>
        <td>BT 10</td>
        <td>258*208*198</td>
        <td>357*309*315</td>
        <td>72</td>
        <td>10</td>
        </tr>
        <tr>
        <td>BT 15</td>
        <td>258*258*258</td>
        <td>396*403*416</td>
        <td>96+</td>
        <td>10</td>
        </tr>
        <tr>
        <td>BT 25</td>
        <td>315*315*240</td>
        <td>400*465*465</td>
        <td>96+</td>
        <td>10</td>
        </tr>
        <tr>
        <td>BT 45</td>
        <td>444*388*302</td>
        <td>565*510*433</td>
        <td>96+</td>
        <td>5</td>
        </tr>
        <tr>
        <td>BT 80</td>
        <td>444*388*485</td>
        <td>570*520*635</td>
        <td>96+</td>
        <td>5</td>
        </tr>
        </tbody>
      </Table>
    </>
  )
}

function Carousel0(prop){
  return(
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={Img1} />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Img2} />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Img3} />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Img4} />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Img5} />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Img6} />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Img7} />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Img8} />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Img9} />
      </Carousel.Item>
    </Carousel>
  )
}

function Content2(prop){
  const { t, i18n } = useTranslation();
  return(
    <>
      <h2>{t("pages.un-biotherm")}</h2>
      <p>{t("products.un-plastic-drums.description1")}</p>
      <p>{t("products.un-plastic-drums.description2")}</p>
    </>
  )
}

const IndexPage = () => (
  <Layout>
    <SEO title="UN Biotherm" />
    <Container className="main-container">
      <Row>
        <Col>
          <Content2 />
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
    <Container fluid={true} className="fluid-dark">
      <Container>
        <Row>
          <Col md={2}></Col>
          <Col md={8}>
            <Carousel0 />
          </Col>
          <Col md={2}></Col>
        </Row>
      </Container>
    </Container>
  </Layout>
)

export default IndexPage
