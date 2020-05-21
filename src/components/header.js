import React , { useState, useEffect } from "react"

import { Navbar, Nav, NavDropdown, Image } from 'react-bootstrap'
import PropTypes from "prop-types"

import {Link} from 'gatsby'

import '../i18n'
import { useTranslation } from 'react-i18next'

import { useStaticQuery, graphql } from "gatsby"

import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

import Logo from '../images/logo-fixed.png'

import LanguageMenu from './change-language'

import Search from "./Search";

const Header = ({ siteTitle }) => {
  const { t, i18n } = useTranslation();
  const [information, setInformation] = useState({
    tel:'+886 2 2833 0618',
    mail:'dgptwn@dg-packaging.com.tw',
    question: 'Have any question?',
    title: 'DGP Taiwan'
  });
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const handleRWD = () => {
    if (window.innerWidth < 300) {
      setInformation({
        tel : '',
        mail : '',
        question: '',
        title: ''
      })
    } else if (window.innerWidth < 400){
      setInformation({
        tel : '',
        mail : '',
        question: true,
        title: ''
      })
    } else if( window.innerWidth < 500 ){
      setInformation({
        tel : '',
        mail : '',
        question: true,
        title: 'DGP Taiwan'
      })
    } else if (window.innerWidth < 700){
      setInformation({
        tel : '+886 2 2833 0618',
        mail : '',
        question: true,
        title: 'DGP Taiwan'
      })
    } else {
      setInformation({
        tel : '+886 2 2833 0618',
        mail : 'dgptwn@dg-packaging.com.tw',
        question: true,
        title: 'DGP Taiwan'
      })
    }
  }
  useEffect(() => { 
    window.addEventListener('resize',handleRWD);
    handleRWD();
    return(() => {
        window.removeEventListener('resize',handleRWD);
    })
  },[]);
  return (
  <header>
    <Navbar bg="dark" variant="dark" id="secondary-menu" expand="xl">
      <Nav>
        <Nav.Item className="no-pointer">
          <Nav.Link>{information.question? t("nav_contact"): ''}</Nav.Link>
        </Nav.Item>
      </Nav>
      <Nav>
        <Nav.Item>
          <Nav.Link href="tel:+886-02-28330618"><FontAwesomeIcon style={{marginRight:"7px"}} icon={faPhone} /> {information.tel}</Nav.Link>
        </Nav.Item>
      </Nav>
      <Nav>
        <Nav.Item>
          <Nav.Link href="mailto:dgptwn@dg-packaging.com.tw"><FontAwesomeIcon style={{marginRight:"7px"}} icon={faEnvelope} /> {information.mail}</Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
    <Navbar className="primary-menu" expand="xl">
      <LanguageMenu />
      <Nav.Item>
        <Navbar.Brand><Link to="/" id="home-link"><Image src={Logo} id="header-logo" roundedCircle /> {information.title}</Link></Navbar.Brand>
      </Nav.Item>
      <Nav.Item>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Nav.Item>
      <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto" style={{fontFamily: 'Noto Sans TC', fontWeight: 500}}>
            <span className="my-nav-link"><Link to="/service">{t("pages.service")}</Link></span>
            <NavDropdown title={t("pages.products")} id="collasible-nav-dropdown">
              <div className="my-dropdown-item"><Link to="products/un-box">{t("pages.un-box")}</Link></div>
              <div className="my-dropdown-item"><Link to="/products/un-box-custom">{t("pages.un-box-custom")}</Link></div>
              <div className="my-dropdown-item"><Link to="/products/un-plastic-drums">{t("pages.un-plastic-drums")}</Link></div>
              <div className="my-dropdown-item"><Link to="/products/un-biotherm">{t("pages.un-biotherm")}</Link></div>
              <div className="my-dropdown-item"><Link to="/products/pathopak">DGP Pathopak</Link></div>
              <div className="my-dropdown-item"><Link to="/products/dgp-pathopouch">DGP Pathopouch</Link></div>
              <div className="my-dropdown-item"><Link to="/products/cold-packs">Cold Packs</Link></div>
              <div className="my-dropdown-item"><Link to="/products/dg-labels">{t("pages.dg-lebels")}</Link></div>
            </NavDropdown>
            <span className="my-nav-link"><Link to="/global">{t("pages.global")}</Link></span>
            <span className="my-nav-link"><Link to="/contact">{t("pages.contact")}</Link></span>
          </Nav>
          <Nav id="search-row">
            
          </Nav>
      </Navbar.Collapse>
    </Navbar>
  </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header