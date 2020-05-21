import React from "react"
import { Carousel, Image } from 'react-bootstrap'
import Slide1 from '../images/slideshow/101.jpg'
import Slide2 from '../images/slideshow/airplane.jpg'
import Slide3 from '../images/slideshow/un-box.jpg'
//import PropTypes from 'prop-types'

const SlideShow = () => (
  <Carousel id="slideshow" className="silde-show" interval={5000} controls={false} indicators={false}>
      <Carousel.Item>
        <Image className="d-block w-100 slide-img" src={Slide1} alt="This is Slide1" fluid/>
      </Carousel.Item>
      <Carousel.Item>
        <Image className="d-block w-100 slide-img" src={Slide2} alt="This is Slide2" fluid/>
      </Carousel.Item>
      <Carousel.Item>
        <Image className="d-block w-100 slide-img" src={Slide3} alt="This is Slide3" fluid/>
      </Carousel.Item>
  </Carousel>
)

export default SlideShow