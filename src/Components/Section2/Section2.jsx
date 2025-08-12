import react ,{ useEffect, useState } from 'react'
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
import location from '../../assets/imges/footer/location.png'


import axios from 'axios'
import style from './Section2.module.css'

const Section2 = () => {

      let [cars , setCars] = useState([])

      let [searchTerm, setSearchTerm] = useState('');
    
      let carsImgs = [carOne , carTwo , carThree]
      
      let getCars = async() => {
        try { let response = await axios.get('https://myfakeapi.com/api/cars/')
          setCars(response?.data?.cars)
          
        } 
        catch (error) {
          console.log(error)
        }
      }
    
      useEffect (() => {
        getCars()
      },[])
    

      const filteredCars = cars.filter((car) =>
        car.car.toLowerCase().includes(searchTerm.toLowerCase())
      );


  return (
    <div className="container" id='Deals'>
        <div className={style.carsSection}>
            <div className={`d-none d-lg-block ${style.searchBox}`}>
              <input className={style.search} type="text" placeholder='Search By Name' value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} />
              <img src={location} alt="" className={style.location} />
              <button className={style.searchButton}>Search</button>
            </div>
            <h3>POPULAR RENTAL DEALS</h3>
            <h4>Most popular cars rental deals</h4>
            <div className="row">
            {filteredCars.slice(0,4).map((car , index) =>(
                <div className="col-sm-12 col-md-4 col-lg-3 d-flex justify-content-center">
                <Card key={car.id} style={{ width: '18.5rem' }} className={style.cards}>
                <Card.Img className={style.img}  variant="top" src={carsImgs[index % carsImgs.length]} />
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
                        <h5><span>{car?.price}</span>/day</h5>
                        </div>

                    </Card.Text>
                    <Link to={`/cardetails/${car.id}`}>
                      <Button variant="primary" className='w-100'>
                      View details 
                      <img src={arrow} alt="arrow" />
                      </Button>
                    </Link>
                </Card.Body>
                </Card>
                </div>
        
            ))}
            </div>
            <br />
            <Link to="/allcars">
                <button className={style.button}>
                Show all vehicles
                <i class="fa-solid fa-arrow-right"></i>
                </button>
            </Link>
        </div>
    </div>
  )
}

export default Section2