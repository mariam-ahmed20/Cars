import React from 'react'
import jaguar from '../../assets/imges/landing-page/jaguar.png'
import nissan from '../../assets/imges/landing-page/nissan.png'
import honda from '../../assets/imges/landing-page/honda.png'
import volvo from '../../assets/imges/landing-page/volvo.png'
import audi from '../../assets/imges/landing-page/audi.png'
import ac from '../../assets/imges/landing-page/ac.png'


import { Carousel } from 'react-bootstrap'
import style from './Brands.module.css'

const Brands = () => {
  return (
        <>

      <Carousel interval={2000}>
        <Carousel.Item className={style.brands}>
          <img src={honda} alt="" />
          
          <img src={jaguar} alt="" />
          
          <img src={nissan} alt="" />
          
          <img src={volvo} alt="" />
          
          <img src={audi} alt="" />
        </Carousel.Item>
        <Carousel.Item className={style.brands}>
          <img src={ac} alt="" />

          <img src={honda} alt="" />
          
          <img src={jaguar} alt="" />
          
          <img src={nissan} alt="" />
          
          <img src={volvo} alt="" />
          
        </Carousel.Item>

      </Carousel>

    </>
  )
}

export default Brands