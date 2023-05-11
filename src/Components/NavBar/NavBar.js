
import { useState } from 'react'
import './NavBar.scss'




const NavBar = () => {

  const [isActive, setActive] = useState(false)

  const clickHandler = () => {
   setActive(!isActive);
  }


  return(
        <nav className='nav__bar' >
          <div className='nav__bar-author'>
              <a href='#header'><h2 className='author'>michał bodys</h2></a>
              <p>portfolio<span className='year'>2023</span></p>
            </div>
            <div className={`nav__bar-links ${isActive ? 'active': ''}`}  style={isActive ? {clipPath: 'circle(140% at 80% 90%)'} : {} }>
              <a href="#about" className='nav__link' onClick={clickHandler}>about</a>
              <a href="#projects" className='nav__link' onClick={clickHandler} >projects</a>
              <a href="#skills" className='nav__link' onClick={clickHandler}>skills</a>
              <a href="#contact" className='nav__link' onClick={clickHandler}>contact</a>
          </div>
          <div className={`nav__burger-icon ${isActive ? 'close' : ''}`} onClick={clickHandler}>
                <div className='burger-icon-line'></div>
            </div>
        </nav>
    )
}

export default NavBar