import react ,{useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import arrow from '../../assets/imges/card/arrow-right.png'
import airconditioning from '../../assets/imges/card/d8wxke_2_.png'
import automatic from '../../assets/imges/card/Frame.png'
import reviews from '../../assets/imges/card/star.png'
import passanger from '../../assets/imges/card/user.png'  
import carOne from '../../assets/imges/landing-page/car1.png'
import carTwo from '../../assets/imges/landing-page/car2.png'
import carThree from '../../assets/imges/landing-page/car3.png'



import axios from 'axios'
import style from '../Section2/Section2.module.css'
import styles from '../AllCars/AllCars.module.css'


const AllCars = () => {
      let [cars , setCars] = useState([])
    
      let carsImgs = [carOne , carTwo , carThree]
      
      let getCars = async() => {
        try { let response = await axios.get('https://myfakeapi.com/api/cars/')
          setCars(response?.data?.cars)
          
        } 
        catch (error) {
          console.log(error)
        }
      }

      let carDetails = (currentCar) => {
        let currentIndex = cars.indexOf(currentCar)
        console.log(currentIndex)

        console.log()
      }
    
      useEffect (() => {
        getCars()
      },[])
    



  return (
    <>
    <div className="container">
        <h1 className={styles.title}>Home/Cars</h1>
        <div className={style.carsSection}>
            <h3>POPULAR RENTAL DEALS</h3>
            <h4>Most popular cars rental deals</h4>
            <div className="row">
            {cars.map((car , index) =>(
                <div key={car.id} className="col-sm-12 col-md-4 col-lg-3 d-flex justify-content-center">
                  <Card style={{ width: '18.5rem' }} className={style.cards}>
                  <Card.Img className={style.img} variant="top" src={carsImgs[index % carsImgs.length]} />
                  <Card.Body>
                      <Card.Title>{car?.car}</Card.Title>
                      <Card.Text>
                          <div className={style.card}>
                          <img src={reviews} alt="" />
                          (1345 reviews)
                          </div>
                          <div className="row">
                          <div className={`col ${style.card}`}>
                              <img src={passanger} alt="" />
                              (2 passenger)
                          </div>
                          <div className={`col ${style.card}`}>
                              <img src={airconditioning} alt="" />
                              Air condioning
                          </div>
                          </div>
                          <div className="row">
                          <div className={`col ${style.card}`}>
                              <i class="fa-solid fa-calendar-days"></i>
                              2021
                          </div>
                          <div className={`col ${style.card}`}>
                              <img src={automatic} alt="" />
                              Automatic
                          </div>
                          </div>

                          <hr />
                          <div className={style.price}>
                          <h5>price</h5>
                          <h5>{car?.price}/day</h5>
                          </div>

                      </Card.Text>
                      <Link to={`/cardetails/${car.id}`}>
                        <Button onClick={() =>carDetails(car)} variant="primary" className='w-100'>
                        View details 
                        <img src={arrow} alt="arrow" />
                        </Button>
                      </Link>
                  </Card.Body>
                  </Card>
                </div>
        
            ))}
            </div>
        </div>
    </div>
    
    </>

  )
}

export default AllCars