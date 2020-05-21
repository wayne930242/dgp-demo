/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Col, Row, Container, Navbar, Nav } from 'react-bootstrap'

import '../i18n'
import { useTranslation } from 'react-i18next'

import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.scss"

import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faPhoneAlt, faEnvelope, faFax , faMobileAlt, faHandPointer} from '@fortawesome/free-solid-svg-icons'

import Logo from '../images/logo-fixed.png'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  
  const { t, i18n } = useTranslation();

  var companyTitle = ''
  var companyTitle2 = ''

  if(t("company_title_en")){
    companyTitle = <h6>{t("company_title")}<br />{t("company_title_en")}</h6>
    companyTitle2 = <h6>{t("company_title")}<br />{t("company_title_en")}</h6>
  } else {
    companyTitle = <h6>{t("company_title")}</h6>
    companyTitle2 = <h6>{t("company_title")}</h6>
  }

  var slogen = '';

  if(t("slogen")){
    slogen = <span>{t("slogen")}</span>
  }

  function ContactInfo(){
    return (
      <Col className="footer-contact-info">
        {companyTitle}
        <ul className="contact-info">
          <li>
          <FontAwesomeIcon size="xs" icon={faPhoneAlt} /> +886 2 2833-0618
          </li>
          <li>
          <FontAwesomeIcon size="xs" icon={faFax} /> +886 2 8192-7205
          </li>
          <li>
          <FontAwesomeIcon size="xs" icon={faMobileAlt} /> +886 (0)909-158628
          </li>
          <li>
          <FontAwesomeIcon size="xs" icon={faEnvelope} /> dgptwn@dg-packaging.com.tw
          </li>
          <li>
          <FontAwesomeIcon size="xs" icon={faHandPointer} /> www.dg-packaging.com.tw
          </li>
          <li>
          <FontAwesomeIcon size="xs" icon={faMapMarkerAlt} /> {t("address1")}<br />{t("address2")}
          </li>
        </ul>
      </Col>
    )
  }
  
  function Disclaimer(){
    return (
      <Col className="footer-disclaimer">
        <h5>{t("disclaimer_title")}</h5>
        <p>{t("disclaimer.p1")}</p>
        <p>{t("disclaimer.p2")}</p>
        <p>{t("disclaimer.p3")}</p>
      </Col>
    )
  }

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main id="main">
        {children}
      </main>
      <footer>
        <Container id="footer-primary-container" fluid={true}>
          <Row>
            <Col id="footer-desclaimer-col" lg={8}>
              <Disclaimer />
            </Col>
            <Col id="footer-contact-info-col" lg={4}>
              <ContactInfo />
            </Col>
          </Row>
        </Container>
        <Container id="footer-secondary-container" fluid={true}>
          <img src={Logo} id="footer-logo"/>
          {companyTitle2}<br />
          <p>{t("short_description")}<br/>
          {slogen}</p>
        </Container>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
