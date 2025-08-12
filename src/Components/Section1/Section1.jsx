import React from 'react'
import mainCar from '../../assets/imges/landing-page/car 2 1.png'
import photo from '../../assets/imges/landing-page/frame.png'  
import vector from '../../assets/imges/landing-page/vector 1.png'
import andriod from '../../assets/imges/landing-page/andriod.png'
import ios from '../../assets/imges/landing-page/ios.png'
import 'animate.css';

import style from './Section1.module.css'

const Section1 = () => {
  return (
    <div className="container">
      <div className={`row ${style.main} `}>
        <div className={`col-md-5 animate__animated animate__slideInUp ${style.left} `}>
          <h1>
            Find, book and <br /> rent a car 
                <span>
                    Easily
                    <img className={style.vector} src={vector} alt="" />
                </span>
          </h1>

          <p>Get a car wherever and whenever you <br /> need it with your IOS and Android device.</p>

          <img src={andriod} alt="" className={style.icon} />
          <img src={ios} alt="" className={style.icon} />
        
        </div>
        <div className="col-md-7">
          <img src={mainCar} alt="" className={`animate__animated animate__slideInRight ${style.mainCar}`} />
          <img src={photo} alt="" className={`d-none d-lg-block ${style.background}`} />
        </div>
      </div>

    </div>
  )
}

export default Section1