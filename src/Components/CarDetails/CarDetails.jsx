import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import airconditioning from '../../assets/imges/card/d8wxke_2_.png'
import automatic from '../../assets/imges/card/Frame.png'
import door from '../../assets/imges/card/doors.png'
import vector from '../../assets/imges/landing-page/sec-5/Vector.png'
import passanger from '../../assets/imges/card/user.png'
import Car from '../../assets/imges/landing-page/sec-5/Audi 1.png'
import axios from 'axios';
import style from './CarDetails.module.css';

export default function CarDetails() {
  let { id } = useParams();
  let [car, setCar] = useState(null);

  let getCar = async () => {
    try {
      let response = await axios.get(`https://myfakeapi.com/api/cars/${id}`)
      setCar(response?.data?.Car)
    }
    catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getCar();
  }, []);

  return (

    <>
      <div className={`row ${style.row}`}>
        <div className={`col-lg-6 col-md-12 ${style.left}`}>
          <img src={vector} alt="" className={`d-none d-lg-block ${style.vector}`} />
          <img src={Car} alt="" className={style.car} />
        </div>
        <div className={`col ${style.right}`}>
          <h3>
            WHY CHOOSE US
          </h3>
          <h4>
            We offer the best experience <br /> with our rental deals
          </h4>
          <div>
            {car ? (
              <>
                <div className={style.details}>
                  <h2>{car?.car} - {car?.car_model} - {car?.car_model_year}</h2>
                  <h2>Price: {car.price}/day</h2>             
                </div>
              </>
            ) : (
              <p>Loading...</p>
            )}
          </div>
          <div>
            <h5>
              <img src={airconditioning} alt="" />
              Air Conditioning
            </h5>
            <h5>
              <img src={passanger} alt="" />
              2 Passangers
            </h5>
            <h5>
              <img src={automatic} alt="" />
              Auto
            </h5>
            <h5>
              <img src={door} alt="" />
              2 Doors
            </h5>
          </div>
        </div>
      </div>
    </>




  );
}
