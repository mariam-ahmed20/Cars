import React from 'react'
import calender from '../../assets/imges/landing-page/calender.png'
import car from '../../assets/imges/landing-page/car-icon.png'
import location from '../../assets/imges/landing-page/location.png'


import style from './Section3.module.css'
import Brands from '../Brands/Brands'

const Section3 = () => {
  return (
    <>
    <div className={`container ${style.container} `} id='How'>
        <h3>HOW IT WORK</h3>
        <h4>Rent with following 3 working steps</h4>
        <div className={`row ${style.working_steps}`}>
            <div className='col'>
                <img src={location} alt="" />
                <h5>Choose location</h5>
                <p>Choose your and find <br /> your best car</p>
            </div>
            <div className='col'>
                <img src={calender} alt="" />
                <h5>Pick-up date</h5>
                <p>Select your pick up date and <br /> time to book your car</p>
            </div>
            <div className='col'y>
                <img src={car} alt="" />
                <h5>Book your car</h5>
                <p>Book your car and we will deliver <br /> it directly to you</p>
            </div>            
        </div>

   
    </div>
    
    
    
    <Brands />
    </>
  )
}

export default Section3