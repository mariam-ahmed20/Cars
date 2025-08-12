import React from 'react'
import background from '../../assets/imges/landing-page/sec-6/bg-sec6.png'
import girl from '../../assets/imges/landing-page/sec-6/girl.png'
import boy from '../../assets/imges/landing-page/sec-6/Rectangle 8 (1).png'
import star from '../../assets/imges/card/star.png'
import { Carousel } from 'react-bootstrap'

import style from './Section6.module.css'


const Section6 = () => {
  return (
    <>
    <div className={style.main}>
        <img className={`d-none d-lg-block ${style.left}`} src={background} alt="" />
        <img className={`d-none d-lg-block ${style.right}`} src={background} alt="" />


        <h3>TESTIMONIALS</h3>
        <h4>What peole say about us?</h4>
        
        <Carousel interval={2000}>
            {[...Array(2)].map(() => (
                <Carousel.Item>
                    <div className="row">
                        <div  className={`card mb-3 col ${style.card}`}>
                        <div  className="row g-0">
                            <div  className="col-md-6">
                            <img src={girl}  className={`img-fluid rounded-start ${style.img}`} alt="..." />
                            </div>
                            <div  className="col-md-6">
                            <div   className={`card-body ${style.cardBody}`}>
                                <h5   className="card-title"><span>5.0</span> stars</h5>
                                {[...Array(5)].map(() => (<img src={star} alt="" className={style.stars} /> ))}
                                <p   className={`card-text ${style.big}`}>“I feel very secure when using caretall's services. Your customer care team is very enthusiastic and the driver is always on time.”</p>
                                <h6>Charlie Johnson</h6>
                                <p  className={`card-text ${style.small}`}>
                                <small  className="text-body-secondary">From New York, US</small>
                                </p>
                            </div>
                            </div>
                        </div>
                        </div>

                        <div  className={`card mb-3 col ${style.card}`}>
                        <div  className="row g-0">
                            <div  className="col-md-6">
                            <img src={boy}  className={`img-fluid rounded-start ${style.img}`} alt="..." />
                            </div>
                            <div  className="col-md-6">
                            <div   className={`card-body ${style.cardBody}`}>
                                <h5   className="card-title"><span>5.0</span> stars</h5>
                                {[...Array(5)].map(() => (<img src={star} alt="" className={style.stars} /> ))}
                                <p   className={`card-text ${style.big}`}>“I feel very secure when using caretall's services. Your customer care team is very enthusiastic and the driver is always on time.”</p>
                                <h6>Charlie Johnson</h6>
                                <p className={`card-text ${style.small}`}>
                                <small  className="text-body-secondary">From New York, US</small>
                                </p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </Carousel.Item>
            ))}        

        </Carousel>

    </div>


    </>
  )
}

export default Section6