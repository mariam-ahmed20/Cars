import React from 'react'
import mobile from '../../assets/imges/landing-page/sec-7/iPhone-14.png'
import andriod from '../../assets/imges/landing-page/andriod.png'
import ios from '../../assets/imges/landing-page/ios.png'
import background from '../../assets/imges/landing-page/sec-5/Vector.png'

import style from './Section5.module.css'

const Section5 = () => {
  return (
    <>
    <div className={`row ${style.container} `} id='App'>
        <div className={`col ${style.sec5}`}>
            <img className={`d-none d-lg-block ${style.img}`} src={background} alt="" />
            <h3>Download Rentcars App for <span>FREE</span></h3>
            <p>For faster, easier booking and exclusive deals.</p>
            <img src={andriod} alt="" className={style.icon} />
            <img src={ios} alt="" className={style.icon} />
            <form action="">
                <input type="text" placeholder="Name" id="" />
                <input type="text" placeholder="Phone Number" id="" />
                <input type="text" placeholder="Email" id="" />
                <button type="submit">Send</button>
            </form>
        </div>
        <div className={`col d-none d-lg-block ${style.phone}`}>
            <img src={mobile} alt="" />
        </div>
    </div>
    </>
  )
}

export default Section5