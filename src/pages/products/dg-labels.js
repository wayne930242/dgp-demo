import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

import { Col, Row, Container, Badge } from 'react-bootstrap'

import Battery from '../../images/Labels/handling-labels/Battery.png'
import CAO from '../../images/Labels/handling-labels/CAO.jpg'
import Cryogenic from '../../images/Labels/handling-labels/Cryogenic.png'
import EnvironmentHazards from '../../images/Labels/handling-labels/environment-hazards.png'
import KeepAwayFromHeat from '../../images/Labels/handling-labels/keep-away-from-heat.png'
import MagnetizedMaterial from '../../images/Labels/handling-labels/Magnetized-material.jpg'
import OrientationBlack from '../../images/Labels/handling-labels/Orientation-black.png'
import OrientationRed from '../../images/Labels/handling-labels/Orientation-red.jpg'
import UN3373 from '../../images/Labels/handling-labels/UN3373.png'

import HazardLabel11 from '../../images/Labels/hazard-labels/1-1.png'
import HazardLabel12 from '../../images/Labels/hazard-labels/1-2.png'
import HazardLabel13 from '../../images/Labels/hazard-labels/1-3.png'
import HazardLabel14 from '../../images/Labels/hazard-labels/1-4.png'
import HazardLabel15 from '../../images/Labels/hazard-labels/1-5.png'
import HazardLabel16 from '../../images/Labels/hazard-labels/1-6.png'
import HazardLabel21 from '../../images/Labels/hazard-labels/2-1.png'
import HazardLabel22 from '../../images/Labels/hazard-labels/2-2.png'
import HazardLabel23 from '../../images/Labels/hazard-labels/2-3.jpg'
import HazardLabel3 from '../../images/Labels/hazard-labels/3.png'
import HazardLabel41 from '../../images/Labels/hazard-labels/4-1.png'
import HazardLabel42 from '../../images/Labels/hazard-labels/4-2.png'
import HazardLabel43 from '../../images/Labels/hazard-labels/4-3.png'
import HazardLabel51 from '../../images/Labels/hazard-labels/5-1.png'
import HazardLabel52 from '../../images/Labels/hazard-labels/5-2.png'
import HazardLabel61 from '../../images/Labels/hazard-labels/6-1.png'
import HazardLabel62 from '../../images/Labels/hazard-labels/6-2.png'
import HazardLabel7Fissile from '../../images/Labels/hazard-labels/7-Fissile.png'
import HazardLabel71 from '../../images/Labels/hazard-labels/7-I.png'
import HazardLabel72 from '../../images/Labels/hazard-labels/7-II.png'
import HazardLabel73 from '../../images/Labels/hazard-labels/7-III.jpg'
import HazardLabel8 from '../../images/Labels/hazard-labels/8.jpg'
import HazardLabel9 from '../../images/Labels/hazard-labels/9.png'
import HazardLabel9Battery from '../../images/Labels/hazard-labels/9-battery.jpg'

import '../../i18n'
import { useTranslation } from 'react-i18next'

import ReactDOM from 'react-dom'

function Content(prop){
  const { t, i18n } = useTranslation();
  return(
    <>
      <Container className="main-container">
      <Row>
        <Col>
          <h2>{t("products.dg-lebels.title")}</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3 style={{marginTop:"60px"}}>DG Hazard Labels</h3>
        </Col>
      </Row>
      <Row>
        <Col lg={2} md={4} sm={6}>
        <h4>
          <Badge className="labels-head" variant="danger">Class 1</Badge>
        </h4>
        <img className="d-block w-100 labels" src={HazardLabel11} />
        <img className="d-block w-100 labels" src={HazardLabel12} />
        <img className="d-block w-100 labels" src={HazardLabel13} />
        <img className="d-block w-100 labels" src={HazardLabel14} />
        <img className="d-block w-100 labels" src={HazardLabel15} />
        <img className="d-block w-100 labels" src={HazardLabel16} />
        </Col>
        <Col lg={2} md={4} sm={6}>
        <h4>
          <Badge className="labels-head" variant="danger">Class 2</Badge>
        </h4>
        <img className="d-block w-100 labels" src={HazardLabel21} />
        <img className="d-block w-100 labels" src={HazardLabel22} />
        <img className="d-block w-100 labels" src={HazardLabel23} />
        <h4>
          <Badge className="labels-head" variant="danger">Class 3</Badge>
        </h4>
        <img className="d-block w-100 labels" src={HazardLabel3} />
        </Col>
        <Col lg={2} md={4} sm={6}>
        <h4>
          <Badge className="labels-head" variant="danger">Class 4</Badge>
        </h4>
        <img className="d-block w-100 labels" src={HazardLabel41} />
        <img className="d-block w-100 labels" src={HazardLabel42} />
        <img className="d-block w-100 labels" src={HazardLabel43} />
        <h4>
          <Badge className="labels-head" variant="danger">Class 5</Badge>
        </h4>
        <img className="d-block w-100 labels" src={HazardLabel51} />
        <img className="d-block w-100 labels" src={HazardLabel52} />
        </Col>
        <Col lg={2} md={4} sm={6}>
        <h4>
          <Badge className="labels-head" variant="danger">Class 6</Badge>
        </h4>
        <img className="d-block w-100 labels" src={HazardLabel61} />
        <img className="d-block w-100 labels" src={HazardLabel62} />
        <h4>
          <Badge className="labels-head" variant="danger">Class 7</Badge>
        </h4>
        <img className="d-block w-100 labels" src={HazardLabel7Fissile} />
        <img className="d-block w-100 labels" src={HazardLabel71} />
        <img className="d-block w-100 labels" src={HazardLabel72} />
        <img className="d-block w-100 labels" src={HazardLabel73} />
        </Col>
        <Col lg={2} md={4} sm={6}>
        <h4>
          <Badge className="labels-head" variant="danger">Class 8</Badge>
        </h4>
        <img className="d-block w-100 labels" src={HazardLabel8} />
        <h4>
          <Badge className="labels-head" variant="danger">Class 9</Badge>
        </h4>
        <img className="d-block w-100 labels" src={HazardLabel9} />
        <img className="d-block w-100 labels" src={HazardLabel9Battery} />
        </Col>
      </Row>
    </Container>
    <Container fluid={true} className="fluid-gray">
      <Container>
        <Row>
          <Col>
            <h3>Handling Labels</h3>        
          </Col>
        </Row>
        <Row>
          <Col lg={2} md={4} sm={6}>
            <img className="d-block w-100 labels" src={Battery} />
            <img className="d-block w-100 labels" src={CAO} />
          </Col>
          <Col lg={2} md={4} sm={6}>
          <img className="d-block w-100 labels" src={Cryogenic} />
          <img className="d-block w-100 labels" src={EnvironmentHazards} />
          </Col>
          <Col lg={2} md={4} sm={6}>
            <img className="d-block w-100 labels" src={KeepAwayFromHeat} />
            <img className="d-block w-100 labels" src={MagnetizedMaterial} />
          </Col>
          <Col lg={2} md={4} sm={6}>
            <img className="d-block w-100 labels" src={OrientationBlack} />
            <img className="d-block w-100 labels" src={OrientationRed} />
          </Col>
          <Col lg={2} md={4} sm={6}>
            <img className="d-block w-100 labels" src={UN3373} />
          </Col>
        </Row>
      </Container>
    </Container>
    </>
  )
}

const IndexPage = () => (
  <Layout>
    <SEO title="UN Plastic Drums & Jerricans" />
    <Content />
  </Layout>
)

export default IndexPage
