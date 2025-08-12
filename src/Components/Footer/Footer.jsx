import React from 'react'
import call from '../../assets/imges/footer/call.png'
import facebook from '../../assets/imges/footer/facebook.png'
import instagram from '../../assets/imges/footer/instagram.png'
import logo from '../../assets/imges/footer/logo-footer.png'
import location from '../../assets/imges/footer/location.png'
import youtube from '../../assets/imges/footer/youtube.png'
import sms from '../../assets/imges/footer/sms.png'

import style from './Footer.module.css'

const Footer = () => {
  return (
    <>
      <div className={style.footer}>
        <div className={`row ${style.subfooter}`}>
          <ul className='col-md-4'>
            <li className={style.logo}>
              <img src={logo} alt="" />
            </li>
            <li>
              <img src={location} alt="" />
              25566 Hc 1,Glenallen,
              <br />
              Alaska, 99588, USA
            </li>
            <li>
              <img src={call} alt="call" />
              +603 4784 273 12
            </li>
            <li>
              <img src={sms} alt="" />
              rentcars@gmail.com
            </li>
          </ul>
          <ul className='col'>
            <li><h5>Our Products</h5></li>
            <li>Carrers</li>
            <li>Cars</li>
            <li>Packages</li>
            <li>Feature</li>
            <li>Priceline</li>
          </ul>
          <ul className='col'>
            <li><h5>Resources</h5></li>
            <li>Download</li>
            <li>Help Center</li>
            <li>Guides</li>
            <li>Partner Network</li>
            <li>Cruises</li>
            <li>Developer</li>
          </ul>
          <ul className='col'>
            <li><h5>About Rent Cars</h5></li>
            <li>Why Choose Us</li>
            <li>Our Story</li>
            <li>Investor Relations</li>
            <li>Press Center</li>
            <li>Advertise</li>
          </ul>
          <ul className='col'>
            <li><h5>Follow Us</h5></li>
            <li className={style.listIcons}>
              <img src={facebook} alt="" />
              <img src={instagram} alt="" />
              <img src={youtube} alt="" />
            </li>
          </ul>
        </div>
        <hr className={style.hr} />
        <p>Copyright 2023 ・ Rentcars, All Rights Reserved</p>
      </div>
    </>
  )
}

export default Footer