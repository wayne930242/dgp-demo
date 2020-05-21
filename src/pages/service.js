import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { Col, Row, Container, Table } from 'react-bootstrap'

import { Link } from 'gatsby'
import '../i18n'
import { useTranslation } from 'react-i18next'

import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowDown } from '@fortawesome/free-solid-svg-icons'

import Img from "../images/service.jpg"
import Img2 from '../images/service/servic-icon.png'

function Banner(prop){
  const { t, i18n } = useTranslation();
  return(
    <Container id="service-banner-container" fluid={true}>
      <img id="service-banner-image" src={Img} />
    </Container>
  )
}

function ServiceContent(prop){
  const { t, i18n } = useTranslation();
  let chartStyle = {
    margin:"10px 10px 10px 10px",
    padding:"10px 10px 10px 10px",
    border: "2px solid",
    borderRadius: "10px",
    display: "inline-block"
  };
  let chartStyle2 = {
    margin:"10px 10px 10px 10px",
    padding:"10px 10px 10px 10px",
    border: "2px solid #f8f9fa",
    borderRadius: "10px",
    display: "inline-block",
    color: "#f8f9fa"
  };
  return (
    <>
    <Container id='service-container' className='main-container'>
      <Row>
        <div className="service-icon col-lg-2"><img src={Img2} /></div>
        <Col lg={8} id="service-intro">
          <p>{t("service.intro")}</p>
        </Col>
        <Col lg={2}></Col>
      </Row>
      <Row>
        <Col md={4} sm={6} id="service1" className="service-col">
          <h4>
            {t("service.head1")}
          </h4>
          <ul>
            <li>
            <Link to="/products/un-box">{t("service.list1-1")}</Link>
            </li>
            <li>
            <Link to="/products/un-plastic-drums">{t("service.list1-2")}</Link>
            </li>
            <li>
            <Link to="/products/un-biotherm">{t("service.list1-3")}</Link>
            </li>
            <li>
            <Link to="/products/dg-labels">{t("service.list1-4")}</Link>
            </li>
            <li>
            <Link to="/products/un-box-custom">{t("service.list1-5")}</Link>
            </li>
          </ul>
        </Col>
        <Col md={4} sm={6} id="service2" className="service-col">
          <h4>
            {t("service.head2")}
          </h4>
          <ul>
            <li>
            {t("service.list2-1")}
            </li>
            <li>
            {t("service.list2-2")}
            </li>
            <li>
            {t("service.list2-3")}
            </li>
          </ul>
        </Col>
        <Col md={4} sm={6} id="service3" className="service-col">
          <h4>
            {t("service.head3")}
          </h4>
          <ul>
            <li>
            {t("service.list3-1")}
            </li>
            <li>
            {t("service.list3-2")}
            </li>
            <li>
            {t("service.list3-3")}
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
    <Container fluid={true} className="fluid-gray">
      <Container>
        <Row id="dangerous-goods-process">
          <Col>
            <h4>
              {t("service.head4")}
            </h4>
          </Col>
        </Row>
        <Row style={{marginLeft: "0px"}}>
          <div className="col-xs-4 chart" id="dangerous-goods-process">
            <div style={chartStyle}>
              {t("service.list4-1")}
            </div>
            <div style={{
              display: "inline-block"
            }}><FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
          <div className="col-xs-4 chart" id="dangerous-goods-process">
            <div style={chartStyle}>
              {t("service.list4-2")}
            </div>
            <div style={{
              display: "inline-block"
            }}><FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
          <div className="col-xs-4 chart" id="dangerous-goods-process">
            <div style={chartStyle}>
              {t("service.list4-3")}
            </div>
          </div>
        </Row>
      </Container>
    </Container>
    <Container fluid={true} className="fluid-dark">
      <Container>
        <Row>
          <Table borderless={true} className="chart" responsive="sm">
            <tbody>
              <tr>
                <td style={{paddingTop: 0, paddingBottom: 0}}>
                <div style={chartStyle2}>
                  {t("service.head5")}
                </div>
                </td>
                <td style={{paddingTop: 0, paddingBottom: 0}}>
                <ul style={{marginTop: 0, marginLeft: 0, paddingLeft: 0}}>
                <li style={{marginTop: 0}}>
                {t("service.list5-1")}
                </li>
                </ul>
                </td>
              </tr>
              <tr>
                <td style={{paddingTop: 0, paddingBottom: 0}}>
                  <FontAwesomeIcon style={{color: "#f8f9fa", marginLeft: "50px"}} icon={faArrowDown} />
                </td>
                <td style={{paddingTop: 0, paddingBottom: 0}}>
                </td>
              </tr>
              <tr>
                <td style={{paddingTop: 0, paddingBottom: 0}}>
                <div style={chartStyle2}>
                  {t("service.head6")}
                </div>
                </td>
                <td style={{paddingTop: 0, paddingBottom: 0}}>
                <ul style={{marginTop: 0, marginLeft: 0, paddingLeft: 0}}>
                <li>
                {t("service.list6-1")}
                </li>
                <li>
                {t("service.list6-2")}
                </li>
                <li>
                {t("service.list6-3")}
                </li>
                <li>
                {t("service.list6-4")}
                </li>
                </ul>
                </td>
              </tr>
              <tr>
                <td style={{paddingTop: 0, paddingBottom: 0}}>
                  <FontAwesomeIcon style={{color: "#f8f9fa", marginLeft: "50px"}} icon={faArrowDown} />
                </td>
                <td style={{paddingTop: 0, paddingBottom: 0}}>
                </td>
              </tr>
              <tr>
                <td style={{paddingTop: 0, paddingBottom: 0}}>
                <div style={chartStyle2}>
                {t("service.head7")}
                </div>
                </td>
                <td style={{paddingTop: 0, paddingBottom: 0}}>
                <ul style={{marginTop: 0, marginLeft: 0, paddingLeft: 0, color: "#f8f9fa"}}>
                <li>
                {t("service.list7-1")}
                </li>
                <li>
                {t("service.list7-2")}
                </li>
                <li>
                {t("service.list7-3")}
                </li>
                </ul>
                </td>
              </tr>
              <tr>
                <td style={{paddingTop: 0, paddingBottom: 0}}>
                  <FontAwesomeIcon style={{color: "#f8f9fa", marginLeft: "50px"}} icon={faArrowDown} />
                </td>
                <td style={{paddingTop: 0, paddingBottom: 0}}>
                </td>
              </tr>
              <tr>
                <td style={{paddingTop: 0, paddingBottom: 0}}>
                <div style={chartStyle2}>
                {t("service.head8")}
                </div>
                </td>
                <td style={{paddingTop: 0, paddingBottom: 0}}>
                <ul style={{marginTop: 0, marginLeft: 0, paddingLeft: 0, color: "#f8f9fa"}}>
                <li>
                {t("service.list8-1")}
                </li>
                <li>
                {t("service.list8-2")}
                </li>
                </ul>
                </td>
              </tr>
              <tr>
                <td style={{paddingTop: 0, paddingBottom: 0}}>
                  <FontAwesomeIcon style={{color: "#f8f9fa", marginLeft: "50px"}} icon={faArrowDown} />
                </td>
                <td style={{paddingTop: 0, paddingBottom: 0}}>
                </td>
              </tr>
              <tr>
                <td style={{paddingTop: 0, paddingBottom: 0}}>
                <div style={chartStyle2}>
                {t("service.head9")}
                </div>
                </td>
                <td style={{paddingTop: 0, paddingBottom: 0}}>
                <ul style={{marginTop: 0, marginLeft: 0, paddingLeft: 0, color: "#f8f9fa"}}>
                <li>
                {t("service.list9-1")}
                </li>
                <li>
                {t("service.list9-2")}
                </li>
                </ul>
                </td>
              </tr>
            </tbody>
          </Table>
        </Row>
      </Container>
    </Container>
    <Container style={{paddingTop: "60px", marginBottom: "60px"}}>
      <Row>
        <Col>
          <h4>
            {t("service.head10")}
          </h4>
          <ul>
            <li>
            {t("service.list10-1")}
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
    </>
  )
}

const ServicePage = () => (
  <Layout>
    <SEO title="Service" />
    <Banner />
    <ServiceContent />
  </Layout>
)

export default ServicePage