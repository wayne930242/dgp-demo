import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { Col, Row, Container } from 'react-bootstrap'

import '../i18n'
import { useTranslation } from 'react-i18next'

import SlideShow from "../components/slideshow"

import ReactDOM from 'react-dom'

import Safety from '../images/about/safety.png'
import Quality from '../images/about/quality.png'
import Efficiency from '../images/about/efficiency.png'

const AboutUs = () => {
  const { t, i18n } = useTranslation();
  return(
    <Container id="about-block" className="main-container">
      <Row>
        <Col lg={4} md={6}>
          <Row>
            <Col className="about-icon">
              <img src={Safety} />
            </Col>
          </Row>
          <Row>
            <Col>
              <h3 className="index-h3">
                {t("index.safety")}
              </h3>
              <p>
                {t("index.safetyContent")}
              </p>
            </Col>
          </Row>
        </Col>
        <Col lg={4} md={6}>
          <Row>
            <Col className="about-icon">
              <img src={Quality} />
            </Col>
          </Row>
          <Row>
            <Col>
              <h3 className="index-h3">
                {t("index.quality")}
              </h3>
              <p>
                {t("index.qualityContent")}
              </p>
            </Col>
          </Row>
        </Col>
        <Col lg={4} md={6}>
          <Row>
            <Col className="about-icon">
              <img src={Efficiency} />
            </Col>
          </Row>
          <Row>
            <Col>
              <h3 className="index-h3">
                {t("index.efficiency")}
              </h3>
              <p>
                {t("index.efficiencyContent")}
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

const Mission = () => {
  const { t, i18n } = useTranslation()

  return(
    <Container id="mission-block" className="main-container">
      <Row>
        <Col lg={4}><h2>{t("index.missionVision")}</h2></Col>
        <Col lg={6}>
          <p>{t("index.missionVisionContent1")}</p>
          <p>{t("index.missionVisionContent2")}</p>
          <p>{t("index.missionVisionContent3")}</p>
        </Col>
        <Col lg={2}></Col>
      </Row>
    </Container>
  )
}

const IndexPage = () => (
  <Layout>
    <SEO title="DGP Taiwan" />
    <SlideShow />
    <AboutUs />
    <Mission />
  </Layout>
)

export default IndexPage