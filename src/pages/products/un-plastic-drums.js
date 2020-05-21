import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

import { Col, Row, Container, Carousel } from 'react-bootstrap'

import SmallImg from '../../images/UN-pd/small.jpg'
import BigImg from '../../images/UN-pd/big.jpg'

import '../../i18n'
import { useTranslation } from 'react-i18next'

import ReactDOM from 'react-dom'

function Content(prop){
  const { t, i18n } = useTranslation();
  return(
    <>
      <h1>{t("products.un-plastic-drums.title")}</h1>
      <p>{t("products.un-plastic-drums.description")}</p>
      <p>{t("products.un-plastic-drums.size")}</p>
    </>
  )
}

const IndexPage = () => (
  <Layout>
    <SEO title="UN Plastic Drums & Jerricans" />
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
          <Col md={6}>
            <img src={BigImg} style={{width: "100%", height: "auto", margin: "auto", padding: "20px 10px 20px 10px"}}/>
          </Col>
          <Col md={6}>
            <img src={SmallImg} style={{width: "100%", height: "auto", margin: "auto", padding: "20px 10px 20px 10px"}}/>
          </Col>
        </Row>
      </Container>
    </Container>
  </Layout>
)

export default IndexPage
