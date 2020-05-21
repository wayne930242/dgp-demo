import React, { useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { Col, Row, Container } from 'react-bootstrap'

import '../i18n'
import { useTranslation } from 'react-i18next'

import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faPhoneAlt, faEnvelope, faFax , faHandPointer, faMobileAlt} from '@fortawesome/free-solid-svg-icons'

import GoogleMapReact from 'google-map-react';

const Marker = ({ text }) => (
  <div className="map-marker">
    <FontAwesomeIcon style={{color: "#ed0404"}} size="2x" icon={faMapMarkerAlt} /> {text}
  </div>
) ;

const Contact = () => {
  const { t, i18n } = useTranslation();
  var companyTitle = ''
  if(t("company_title_en")){
    companyTitle = <><span className="company-name-zh">{t("company_title")}</span><br /><span className="company-name">{t("company_title_en")}</span></>
  } else {
    companyTitle = <span className="company-name">{t("company_title")}</span>
  }
  return(
    <>
      <Row>
        <Col>
          <h2>{t("pages.contact")}</h2>
          <p>Get in touch with our care team:</p>
        </Col>
      </Row>
      <Row>
        <Col>
          {companyTitle}
          <ul className="location-information">
            <li>
            <FontAwesomeIcon size="xs" icon={faPhoneAlt} /> +886 2 2833-0618
            </li>
            <li>
            <FontAwesomeIcon size="xs" icon={faFax} /> +886 2 8192-7205
            </li>
            <li>
            <FontAwesomeIcon size="xs" icon={faMobileAlt} /> +886(0)909-158628
            </li>
            <li>
            <FontAwesomeIcon size="xs" icon={faEnvelope} /> <a href="mailto:dgptwn@dg-packaging.com.tw">dgptwn@dg-packaging.com.tw</a>
            </li>
            <li>
            <FontAwesomeIcon size="xs" icon={faHandPointer} /> www.dg-packaging.com.tw
            </li>
            <li className="company-adress">
            <FontAwesomeIcon size="xs" icon={faMapMarkerAlt} /> {t("address1")}<br />{t("address2")}
            </li>
          </ul>
        </Col>
      </Row>
    </>
  )
}

function Map (prop){
  return(
    <Container fluid={true} className="fluid-gray">
      <Container>
        <Row>
            <Col>
              <div style={{ height: '55vh', width: '100%' }}>
                <GoogleMapReact
                  bootstrapURLKeys={{ key: 'AIzaSyB6LrTBAJkd4s8jOEd4YTUYyR85XzoIQ2w' }}
                  defaultCenter={{
                    lat: 25.033951,
                    lng: 121.564756
                  }}
                  defaultZoom={15}
                  yesIWantToUseGoogleMapApiInternals
                >
                    <Marker
                      lat={25.033951}
                      lng={121.564756}
                      text="DGP"
                    />
                </GoogleMapReact>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
  )
}

const IndexPage = () => (
  <Layout>
    <SEO title="GLOBAL" />
    <Container className="main-container">
      <Contact />
    </Container>
    <Map />
  </Layout>
)

export default IndexPage