import React from 'react'
import car from '../../assets/imges/landing-page/sec-5/Audi 1.png'
import chat from '../../assets/imges/landing-page/sec-5/chat.png'
import sms from '../../assets/imges/landing-page/sec-5/message.png'
import user from '../../assets/imges/landing-page/sec-5/user.png'
import vector from '../../assets/imges/landing-page/sec-5/Vector.png'
import frame from '../../assets/imges/landing-page/sec-5/Frame 35.png'

import style from './Section4.module.css'

const Section4 = () => {
  return (
    <>
    <div className={`container ${style.container} `} id='Why'>
        <div className={`row ${style.row} `}>
            <div className="col d-none d-lg-block">
                <img src={vector} alt="" className={style.vector}/>
                <img src={car} alt="" className={style.car} />
            </div>

            <div className={`col ${style.why}`}>
                <h3>WHY CHOOSE US</h3>
                <h4>We offer the best experience <br /> with our rental deals</h4>
                <div className={style.reason}>
                    <img src={frame} alt="" />
                    <div>
                        <h5>Best price guaranteed</h5>
                        <p>Find a lower price? We’ll refund you 100% <br /> of the difference.</p>
                    </div>
                </div>

                <div className={style.reason}>
                    <img src={user} alt="" />
                    <div>
                        <h5>Experience driver</h5>
                        <p>Don’t have driver? Don’t worry, we have many <br /> experienced driver for you.</p>
                    </div>
                </div>

                <div className={style.reason}>
                    <img src={sms} alt="" />
                    <div>
                        <h5>24 hour car delivery</h5>
                        <p>Book your car anytime and we will deliver it <br /> directly to you.</p>
                    </div>
                </div>

                <div className={style.reason}>
                    <img src={chat} alt="" />
                    <div>
                        <h5>24/7 technical support</h5>
                        <p>Have a question? Contact Rentcars support <br /> any time when you have problem.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Section4
