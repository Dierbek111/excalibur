import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <>
        <section className="header">
          <div className="container">
            <div className="head__wrap">
              <div className="header__text">
                <h1>Excalibur</h1>
              </div>
              <div className="header__menu">
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Testimonials</a>
                <a href="">Contact</a>
              </div>
              <div className="burger__menu">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/800px-Hamburger_icon.svg.png" alt="" className="burger__img" />
              </div>
            </div>
          </div>
        </section>


        
    </>
  )
}

export default Header