import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

import { Col, Row, Container, Table } from 'react-bootstrap'

import '../../i18n'
import { useTranslation } from 'react-i18next'

import Img from '../../images/flow/full-chart.png' 

import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

function Table2(prop){
  const { t, i18n } = useTranslation();
  return (
    <>
    <h2>{t("products.customized-un-box.title")}</h2>
    <Table striped bordered hover style={{marginTop: "60px"}}>
      <thead>
      <tr>
      <th>{t("table.box-code")}</th>
      <th>{t("table.internal-dimension-cm")}</th>
      <th>{t("table.external-dimension-cm")}</th>
      <th>{t("table.MOQ")}</th>
      </tr>
      </thead>
      <tbody>
      <tr>
      <td>X8</td>
      <td>46.3*24.0*19.5</td>
      <td>47.5*25.0*21.5</td>
      <td>500</td>
      </tr>
      <tr>
      <td>X16.1</td>
      <td>45.3*20.2*30.8</td>
      <td>46.8*21.3*33.6</td>
      <td>500</td>
      </tr>
      <tr>
      <td>X25.1</td>
      <td>29.0*29.0*39.0</td>
      <td>30.5*30.3*41.8</td>
      <td>500</td>
      </tr>
      <tr>
      <td>X51.1</td>
      <td>47.0*47.0*57.2</td>
      <td>48.7*48.7*59.4</td>
      <td>500</td>
      </tr>
      </tbody>
    </Table>
    <p>{t("products.customized-un-box.contact")}</p>
    </>
  )
}

function Chart(prop){
  return(
    <>
      <Row>
      <Col lg={3}></Col>
      <Col lg={6}>
        <img src={Img} style={{width:"80%", height:"auto", margin:"auto"}}/>
      </Col>
      </Row>
      <Col lg={3}></Col>
    </>
  )
}

const IndexPage = () => (
  <Layout>
    <SEO title="UN Box" />
    <Container className="main-container">
      <Row>
        <Col>
          <Table2 />
        </Col>
      </Row>
      <Chart />
    </Container>
  </Layout>
)

export default IndexPage
