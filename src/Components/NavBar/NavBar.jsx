import React , { useState } from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
import logo from '../../assets/imges/nav/logo.png'
import style from './NavBar.module.css'

const NavBar = () => {
  const [active, setActive] = useState("signup");
  return (
    <>
      <div className="container">
        <nav className={`navbar navbar-expand-lg ${style.nav}`}>
          <div className="container-fluid">
            <Link to="/"><img src={logo} alt="" /></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav m-auto mb-2 mb-lg-0">

                <li className="nav-item">
                  <HashLink className="nav-link" to="/#App">Become a renter</HashLink>
                </li>
                <li className="nav-item">
                  <HashLink className="nav-link" to="/#Deals">Rental deals</HashLink>
                </li>
                <li className="nav-item">
                  <HashLink className="nav-link" to="/#How">How it work</HashLink>
                </li>
                <li className="nav-item">
                  <HashLink className="nav-link" to="/#Why">Why choose us</HashLink>
                </li>
              </ul>
              <div className={style.auth}>
                <button
                  className={active === "signin" ? style.active : ""}
                  onClick={() => setActive("signin")}>
                  Sign in
                </button>
                <button
                  className={active === "signup" ? style.active : ""}
                  onClick={() => setActive("signup")}>
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <a href=""></a>
    </>
  )
}

export default NavBar