import React, { useState } from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

import { Col, Row, Container, Table } from 'react-bootstrap'

import '../../i18n'
import { useTranslation } from 'react-i18next'

import ReactDOM from 'react-dom'

import Img from '../../images/box/allboxes.png'
import X3 from '../../images/box/X3.png'
import X9 from '../../images/box/X9.png'
import X11 from '../../images/box/X11.png'
import X21 from '../../images/box/X21.png'
import X23 from '../../images/box/X23.png'
import X25 from '../../images/box/X25.png'
import X30 from '../../images/box/X30.png'
import X35 from '../../images/box/X35.png'
import X51 from '../../images/box/X51.png'
import X52 from '../../images/box/X52.png'
import X60 from '../../images/box/X60.png'

function Table1(prop){
  const { t, i18n } = useTranslation();
  return(
    <>
    <Row>
      <p>{t("products.un-box.description")}</p>
    </Row>
    <Row>
      <Table striped bordered hover>
        <thead>
        <tr>
        <th>{t("table.box-code")}</th>
        <th>{t("table.internal-dimension-cm")}</th>
        <th>{t("table.external-dimension-cm")}</th>
        </tr>
        </thead>
        <tbody>
        <tr>
        <td>X3</td>
        <td>25.0*18.0*17.0</td>
        <td>26.0*19.2*18.8</td>
        </tr>
        <tr>
        <td>X9</td>
        <td>19.5*19.5*30.0</td>
        <td>20.9*20.9*32.1</td>
        </tr>
        <tr>
        <td>X11</td>
        <td>30.8*30.5*31.5</td>
        <td>32.2*31.8*33.6</td>
        </tr>
        <tr>
        <td>X21</td>
        <td>26.0*26.0*45.8</td>
        <td>27.4*27.2*48.1</td>
        </tr>
        <tr>
        <td>X23</td>
        <td>32.0*32.0*35.0</td>
        <td>33.5*33.5*38.0</td>
        </tr>
        <tr>
        <td>X25</td>
        <td>39.2*39.2*41.0</td>
        <td>40.3*39.9*43.0</td>
        </tr>
        <tr>
        <td>X30</td>
        <td>30.2*30.0*53.5</td>
        <td>31.4*31.4*55.4</td>
        </tr>
        <tr>
        <td>X35</td>
        <td>41.8*41.8*33.4</td>
        <td>43.3*43.2*36.2</td>
        </tr>
        <tr>
        <td>X51</td>
        <td>58.0*38.1*49.6</td>
        <td>58.8*39.8*52.0</td>
        </tr>
        <tr>
        <td>X52</td>
        <td>47.2*45.7*43.1</td>
        <td>48.0*47.2*45.5</td>
        </tr>
        <tr>
        <td>X60</td>
        <td>38.5*38.5*66.0</td>
        <td>39.5*39.5*68.5</td>
        </tr>
        </tbody>
      </Table>
    </Row>
    </>
  )
}

function IndexPage() {
  const { t, i18n } = useTranslation();
  return (
  <Layout>
    <SEO title="UN Box" />
    <Container className="main-container">
      <Row>
        <Col>
        <h1>{t("products.un-box.title")}</h1>
        </Col>
      </Row>
      <Table1 />
      <Row style={{marginTop: "60px"}}>
        <Col xl={2} lg={3} md={4} sm={6} style={{zIndex:10}}>
          <img src={X3} style={{width:"192px", height:"134px", display:"block", margin:"auto", zIndex:10}} />
          <p style={{fontFamily: "Impact", textAlign: "center", paddingLeft:"70px", fontSize:"150%"}}>X3</p>
        </Col>
        <Col xl={2} lg={3} md={4} sm={6} style={{zIndex:9}}>
          <img src={X9} style={{width:"171px", height:"160px", display:"block", margin:"auto", zIndex:9}} />
          <p style={{fontFamily: "Impact", textAlign: "center", paddingLeft:"70px", fontSize:"150%"}}>X9</p>
        </Col>
        <Col xl={2} lg={3} md={4} sm={6} style={{zIndex:8}}>
          <img src={X11} style={{width:"218px", height:"190px", display:"block", margin:"auto", zIndex:8}} />
          <p style={{fontFamily: "Impact", textAlign: "center", paddingLeft:"80px", fontSize:"150%"}}>X11</p>
        </Col>
        <Col xl={2} lg={3} md={4} sm={6} style={{zIndex:7}}>
          <img src={X21} style={{width:"209px", height:"236px", display:"block", margin:"auto", zIndex:7}} />
          <p style={{fontFamily: "Impact", textAlign: "center", paddingLeft:"80px", fontSize:"150%"}}>X21</p>
        </Col>
        <Col xl={2} lg={3} md={4} sm={6} style={{zIndex:6}}>
          <img src={X23} style={{width:"225px", height:"204px", display:"block", margin:"auto", zIndex:6}} />
          <p style={{fontFamily: "Impact", textAlign: "center", paddingLeft:"80px", fontSize:"150%"}}>X23</p>
        </Col>
        <Col xl={3} lg={3} md={4} sm={6} style={{zIndex:5}}>
          <img src={X25} style={{width:"256px", height:"240px", display:"block", margin:"auto", zIndex:5}} />
          <p style={{fontFamily: "Impact", textAlign: "center", paddingLeft:"70px", fontSize:"150%"}}>X25</p>
        </Col>
        <Col xl={3} md={4} sm={6} style={{zIndex:4}}>
          <img src={X30} style={{width:"224px", height:"256px", display:"block", margin:"auto", zIndex:4}} />
          <p style={{fontFamily: "Impact", textAlign: "center", paddingLeft:"60px", fontSize:"150%"}}>X30</p>
        </Col>
        <Col xl={3} md={4} sm={6} style={{zIndex:3}}>
          <img src={X35} style={{width:"270px", height:"239px", display:"block", margin:"auto", zIndex:3}} />
          <p style={{fontFamily: "Impact", textAlign: "center", paddingLeft:"80px", fontSize:"150%"}}>X35</p>
        </Col>
        <Col xl={4} md={5} sm={6} style={{zIndex:2}}>
          <img src={X51} style={{width:"316px", height:"304px", display:"block", margin:"auto", zIndex:2}} />
          <p style={{fontFamily: "Impact", textAlign: "center", paddingLeft:"70px", fontSize:"150%"}}>X51</p>
        </Col>
        <Col xl={3} md={5} sm={6} style={{zIndex:1}}>
          <img src={X52} style={{width:"303px", height:"275px", display:"block", margin:"auto", zIndex:1}} />
          <p style={{fontFamily: "Impact", textAlign: "center", paddingLeft:"100px", fontSize:"150%"}}>X52</p>
        </Col>
        <Col xl={3} md={4} sm={6}  style={{zIndex:0}}>
          <img src={X60} style={{width:"256px", height:"286px", display:"block", margin:"auto", zIndex:0}} />
          <p style={{fontFamily: "Impact", textAlign: "center", paddingLeft:"70px", fontSize:"150%"}}>X60</p>
        </Col>
      </Row>
    </Container>
  </Layout>
)}

export default IndexPage
