import React, { useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { Col, Row, Container } from 'react-bootstrap'

import '../i18n'
import { useTranslation } from 'react-i18next'

import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faPhoneAlt, faEnvelope, faIdCardAlt, faFax } from '@fortawesome/free-solid-svg-icons'

import GoogleMapReact from 'google-map-react';

const Marker = ({ text }) => (
  <div className="map-marker">
    <FontAwesomeIcon style={{color: "#ed0404"}} size="2x" icon={faMapMarkerAlt} /> {text}
  </div>
) ;

const HQ = () => {
  const { t, i18n } = useTranslation();
  return(
    <>
      <Container className="main-container">
        <h2>Headquarters</h2>
        <Row>
          <Col>
            <ul className="location-information">
              <li className="location-name">
                SINGAPORE HQ
              </li>
              <li className="company-name">
                DG Packaging Pte Ltd
              </li>
              <li className="company-adress">
                <FontAwesomeIcon size="xs" icon={faMapMarkerAlt} /> 56 Loyang Way #05-01<br />
                Singapore 508775
              </li>
              <li>
                <FontAwesomeIcon size="xs" icon={faPhoneAlt} /> (65) 6385 5888
              </li>
              <li>
                <FontAwesomeIcon size="xs" icon={faEnvelope} /> sales@dg-packaging.com
              </li>
            </ul>
          </Col>
          <Col>
            <div style={{ height: '100%', width: '100%' }} className="google-map-col">
              <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyB6LrTBAJkd4s8jOEd4YTUYyR85XzoIQ2w' }}
                defaultCenter={{
                  lat: 1.380480,
                  lng: 103.976504
                }}
                defaultZoom={10}
                yesIWantToUseGoogleMapApiInternals
              >
                  <Marker
                    lat={1.380480}
                    lng={103.976504}
                    text="DGP"
                  />
              </GoogleMapReact>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="main-container">
        <Row>
          <Col>
            <ul className="location-information">
              <li className="location-name">
              UNITED KINGDOM
              </li>
              <li className="company-name">
              DG Packaging (UK) Ltd
              </li>
              <li className="company-adress">
                <FontAwesomeIcon size="xs" icon={faMapMarkerAlt} /> Unit 2, Regents Business Centre<br />
                Pump Lane, Hayes UB3 3NP<br />
                Middlesex, United Kingdom
              </li>
              <li>
                <FontAwesomeIcon size="xs" icon={faPhoneAlt} /> +44 (0)208 432 0833 (24 Hours)
              </li>
              <li>
                <FontAwesomeIcon size="xs" icon={faEnvelope} /> Robert.Gannon@dg-packaging.co.u
              </li>
            </ul>
          </Col>
          <Col>
            <div style={{ height: '100%', width: '100%' }} className="google-map-col">
              <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyB6LrTBAJkd4s8jOEd4YTUYyR85XzoIQ2w' }}
                defaultCenter={{
                  lat: 51.5051195,
                  lng: -0.4119728
                  }}
                defaultZoom={10}
              >
                <Marker
                  lat={51.5051195}
                  lng={-0.4119728}
                  text="DGP"
                />
              </GoogleMapReact>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

const GlobalOffice = () => {
  const { t, i18n } = useTranslation();
  return(
    <>
      <Container fluid={true} className="fluid-gray">
        <Container>
          <h2>Global Offices</h2>
          <Row>
            <Col>
              <ul className="location-information">
                <li className="location-name">
                USA
                </li>
                <li className="company-name">
                DG Packaging (USA) Inc
                </li>
                <li className="company-adress">
                  <FontAwesomeIcon size="xs" icon={faMapMarkerAlt} /> 5341 W. 104th Street<br />
                  Los Angeles, California 90045
                </li>
                <li>
                  <FontAwesomeIcon size="xs" icon={faPhoneAlt} /> +1 424 242 9613
                </li>
                <li>
                  <FontAwesomeIcon size="xs" icon={faEnvelope} /> LAX@dgp-usa.com
                </li>
              </ul>
            </Col>
            <Col>
              <div style={{ height: '100%', width: '100%' }} className="google-map-col">
                <GoogleMapReact
                  bootstrapURLKeys={{ key: 'AIzaSyB6LrTBAJkd4s8jOEd4YTUYyR85XzoIQ2w' }}
                  defaultCenter={{
                    lat: 33.9425242,
                    lng: -118.375582
                  }}
                  defaultZoom={10}
                  yesIWantToUseGoogleMapApiInternals
                >
                    <Marker
                      lat={33.9425242}
                      lng={-118.375582}
                      text="DGP"
                    />
                </GoogleMapReact>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid={true} className="main-container">
        <Container>
          <Row>
            <Col>
              <ul className="location-information">
                <li className="location-name">
                The Netherlands
                </li>
                <li className="company-name">
                DG Packaging B.V.
                </li>
                <li className="company-adress">
                  <FontAwesomeIcon size="xs" icon={faMapMarkerAlt} /> Breguetlaan 23<br />
                  1438 BA Oude Meer<br />
                  (Amsterdam Airport Schiphol)<br />
                  Netherlands
                </li>
                <li>
                  <FontAwesomeIcon size="xs" icon={faPhoneAlt} /> 0800 0 90 90 90 (local toll free)
                </li>
                <li>
                  <FontAwesomeIcon size="xs" icon={faPhoneAlt} /> + 31 85 484 40 95 (international)
                </li>
                <li>
                  <FontAwesomeIcon size="xs" icon={faEnvelope} /> info@dg-packaging.nl
                </li>
              </ul>
            </Col>
            <Col>
              <div style={{ height: '100%', width: '100%' }} className="google-map-col">
                <GoogleMapReact
                  bootstrapURLKeys={{ key: 'AIzaSyB6LrTBAJkd4s8jOEd4YTUYyR85XzoIQ2w' }}
                  defaultCenter={{
                    lat: 52.287988, 
                    lng: 4.781508
                    }}
                  defaultZoom={10}
                >
                  <Marker
                    lat={52.287988}
                    lng={4.781508}
                    text="DGP"
                  />
                </GoogleMapReact>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid={true} className="fluid-gray">
        <Container>
          <Row>
            <Col>
              <ul className="location-information">
                <li className="location-name">
                SOUTH AFRICA
                </li>
                <li className="company-name">
                DG Packaging SA (Pty) Ltd
                </li>
                <li className="company-adress">
                  <FontAwesomeIcon size="xs" icon={faMapMarkerAlt} /> Unit 19, Gateway Industrial Park<br />
                  Graniet Road, Jet Park 1459<br />
                  Johannesburg, South Africa
                </li>
                <li>
                  <FontAwesomeIcon size="xs" icon={faIdCardAlt} /> Michael Swart
                </li>
                <li>
                  <FontAwesomeIcon size="xs" icon={faPhoneAlt} /> +27 (0) 10 590 940
                </li>
                <li>
                  <FontAwesomeIcon size="xs" icon={faEnvelope} /> Operations@dg-packaging.co.za
                </li>
                <li>
                  <FontAwesomeIcon size="xs" icon={faEnvelope} /> Sales@dg-packaging.co.za
                </li>
                <li>
                  <FontAwesomeIcon size="xs" icon={faEnvelope} /> Accounts@dg-packaging.co.za
                </li>
              </ul>
            </Col>
            <Col>
              <div style={{ height: '100%', width: '100%' }} className="google-map-col">
                <GoogleMapReact
                  bootstrapURLKeys={{ key: 'AIzaSyB6LrTBAJkd4s8jOEd4YTUYyR85XzoIQ2w' }}
                  defaultCenter={{
                    lat: -26.155821, 
                    lng: 28.219044
                    }}
                  defaultZoom={10}
                >
                  <Marker
                    lat={-26.155821}
                    lng={28.219044}
                    text="DGP"
                  />
                </GoogleMapReact>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid={true} className="main-container">
        <Container>
          <Row>
            <Col>
              <ul className="location-information">
                <li className="location-name">
                AUSTRALIA
                </li>
                <li className="company-name">
                DG Packaging Australia Pty Ltd
                </li>
                <li className="company-adress">
                  <FontAwesomeIcon size="xs" icon={faMapMarkerAlt} /> Unit 1, 13 Greenfield Street, Banksmeadow NSW 2019
                </li>
                <li>
                  <FontAwesomeIcon size="xs" icon={faIdCardAlt} /> Alex
                </li>
                <li>
                  <FontAwesomeIcon size="xs" icon={faPhoneAlt} /> 1300 617 500
                </li>
                <li>
                  <FontAwesomeIcon size="xs" icon={faPhoneAlt} /> 02 8599 0809
                </li>
                <li>
                  <FontAwesomeIcon size="xs" icon={faEnvelope} /> alex.stenberg@dg-packaging.com.au
                </li>
              </ul>
            </Col>
            <Col>
              <div style={{ height: '100%', width: '100%' }} className="google-map-col">
                <GoogleMapReact
                  bootstrapURLKeys={{ key: 'AIzaSyB6LrTBAJkd4s8jOEd4YTUYyR85XzoIQ2w' }}
                  defaultCenter={{
                    lat: -33.958279, 
                    lng: 151.209492
                    }}
                  defaultZoom={10}
                >
                  <Marker
                    lat={-33.958279}
                    lng={151.209492}
                    text="DGP"
                  />
                </GoogleMapReact>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid={true} className="fluid-gray">
        <Container>
          <Row>
            <Col>
              <ul className="location-information">
                <li className="location-name">
                VIETNAM
                </li>
                <li className="company-name">
                DG Packaging Vietnam
                </li>
                <li className="company-adress">
                  <FontAwesomeIcon size="xs" icon={faMapMarkerAlt} /> Room G2 – Ground Floor<br />
                  51 Yen The St., Ward 02n<br />
                  Tanh Binh Dist.<br />
                  Ho Chi Minh City, VietNam
                </li>
                <li>
                  <FontAwesomeIcon size="xs" icon={faPhoneAlt} /> 84-8-3848 7976
                </li>
                <li>
                  <FontAwesomeIcon size="xs" icon={faEnvelope} /> sales@dg-packaging.com
                </li>
              </ul>
            </Col>
            <Col>
              <div style={{ height: '100%', width: '100%' }} className="google-map-col">
                <GoogleMapReact
                  bootstrapURLKeys={{ key: 'AIzaSyB6LrTBAJkd4s8jOEd4YTUYyR85XzoIQ2w' }}
                  defaultCenter={{
                    lat: 10.813189, 
                    lng: 106.668234
                    }}
                  defaultZoom={10}
                >
                  <Marker
                    lat={10.813189}
                    lng={106.668234}
                    text="DGP"
                  />
                </GoogleMapReact>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid={true} className="main-container">
        <Container>
          <Row>
            <Col>
              <ul className="location-information">
                <li className="location-name">
                THAILAND
                </li>
                <li className="company-name">
                DG Packaging (Thailand) Co. Ltd.
                </li>
                <li className="company-adress">
                  <FontAwesomeIcon size="xs" icon={faMapMarkerAlt} /> 628, 4th Floor Triple i Building, Soi Klab Chom, Nonsee Road,<br />
                  Chongnonsee, Yannawa, Bangkok 10120
                </li>
                <li>
                  <FontAwesomeIcon size="xs" icon={faPhoneAlt} /> +66(0) 2681 8122
                </li>
                <li>
                  <FontAwesomeIcon size="xs" icon={faFax} /> +66(0) 2681 8121
                </li>
                <li>
                  <FontAwesomeIcon size="xs" icon={faEnvelope} /> info@dg-packaging.co.th
                </li>
              </ul>
            </Col>
            <Col>
              <div style={{ height: '100%', width: '100%' }} className="google-map-col">
                <GoogleMapReact
                  bootstrapURLKeys={{ key: 'AIzaSyB6LrTBAJkd4s8jOEd4YTUYyR85XzoIQ2w' }}
                  defaultCenter={{
                    lat: 13.688550, 
                    lng: 100.544959
                    }}
                  defaultZoom={10}
                >
                  <Marker
                    lat={13.688550}
                    lng={100.544959}
                    text="DGP"
                  />
                </GoogleMapReact>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid={true} className="fluid-gray">
        <Container>
          <Row>
            <Col>
              <ul className="location-information">
                <li className="location-name">
                MALAYSIA
                </li>
                <li className="company-name">
                DGP LOGISTICS SDN. BHD.
                </li>
                <li className="company-adress">
                  <FontAwesomeIcon size="xs" icon={faMapMarkerAlt} /> 7a Jalan Undan 15, Taman Perling, Johor Bahru<br />
                  Johor Malaysia
                </li>
                <li>
                  <FontAwesomeIcon size="xs" icon={faEnvelope} /> shannon.tan@dg-packaging.com
                </li>
                <li>
                  <FontAwesomeIcon size="xs" icon={faPhoneAlt} /> +65 8228 1547
                </li>
                <li>
                  <FontAwesomeIcon size="xs" icon={faEnvelope} /> wong.wj@dg-packaging.com
                </li>
                <li>
                  <FontAwesomeIcon size="xs" icon={faEnvelope} /> beh.hk@dg-packaging.com
                </li>
                <li>
                  <FontAwesomeIcon size="xs" icon={faEnvelope} /> howard@dg-packaging.com
                </li>
                <li>
                  <FontAwesomeIcon size="xs" icon={faEnvelope} /> mili@dg-packaging.com
                </li>
              </ul>
            </Col>
            <Col>
              <div style={{ height: '100%', width: '100%' }} className="google-map-col">
                <GoogleMapReact
                  bootstrapURLKeys={{ key: 'AIzaSyB6LrTBAJkd4s8jOEd4YTUYyR85XzoIQ2w' }}
                  defaultCenter={{
                    lat: 1.481436, 
                    lng: 103.683065
                    }}
                  defaultZoom={10}
                >
                  <Marker
                    lat={1.481436}
                    lng={103.683065}
                    text="DGP"
                  />
                </GoogleMapReact>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid={true} className="main-container">
        <Container>
          <Row>
            <Col>
              <ul className="location-information">
                <li className="location-name">
                INDONESIA
                </li>
                <li className="company-name">
                DGP Indonesia
                </li>
                <li className="company-adress">
                  <FontAwesomeIcon size="xs" icon={faMapMarkerAlt} /> PT Daya Guna Perkasa,<br />
                  JL. Kesehatan Raya No. 36 F-G,<br />
                  JL. Tanah Abang IV Jakarta Pusat,<br />
                  Indonesia 10160
                </li>
                <li>
                  <FontAwesomeIcon size="xs" icon={faPhoneAlt} /> +62-21 88966881
                </li>
                <li>
                  <FontAwesomeIcon size="xs" icon={faPhoneAlt} /> +62-21 88965802
                </li>
                <li>
                  <FontAwesomeIcon size="xs" icon={faEnvelope} /> chris@dg-idpackaging.com
                </li>
              </ul>
            </Col>
            <Col>
              <div style={{ height: '100%', width: '100%' }} className="google-map-col">
                <GoogleMapReact
                  bootstrapURLKeys={{ key: 'AIzaSyB6LrTBAJkd4s8jOEd4YTUYyR85XzoIQ2w' }}
                  defaultCenter={{
                    lat: -6.270555, 
                    lng: 106.759950
                    }}
                  defaultZoom={10}
                >
                  <Marker
                    lat={-6.270555}
                    lng={106.759950}
                    text="DGP"
                  />
                </GoogleMapReact>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid={true} className="fluid-gray">
        <Container>
          <Row>
            <Col>
              <ul className="location-information">
                <li className="location-name">
                INDONESIA
                </li>
                <li className="company-name">
                DGP Surabaya
                </li>
                <li className="company-adress">
                  <FontAwesomeIcon size="xs" icon={faMapMarkerAlt} /> Jln Veteran no: 5 Surabaya<br />
                  Jawa Timur- Indonesia
                </li>
                <li>
                  <FontAwesomeIcon size="xs" icon={faPhoneAlt} /> 031- 3556536
                </li>
                <li>
                  <FontAwesomeIcon size="xs" icon={faEnvelope} /> Dominggus - general@dg-idpackaging.com
                </li>
                <li>
                  <FontAwesomeIcon size="xs" icon={faEnvelope} /> Kristin - kristin@dg-idpackaging.com
                </li>
                <li>
                  <FontAwesomeIcon size="xs" icon={faEnvelope} /> Farah - sales_sby@dg-idpackaging.com
                </li>
              </ul>
            </Col>
            <Col>
              <div style={{ height: '100%', width: '100%' }} className="google-map-col">
                <GoogleMapReact
                  bootstrapURLKeys={{ key: 'AIzaSyB6LrTBAJkd4s8jOEd4YTUYyR85XzoIQ2w' }}
                  defaultCenter={{
                    lat: -7.241062, 
                    lng: 112.737326
                    }}
                  defaultZoom={10}
                >
                  <Marker
                    lat={-7.241062}
                    lng={112.737326}
                    text="DGP"
                  />
                </GoogleMapReact>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  )
}

const IndexPage = () => (
  <Layout>
    <SEO title="GLOBAL" />
    <HQ />
    <GlobalOffice />
  </Layout>
)

export default IndexPage
