
import './NavBar.scss'




const NavBar = () => {





  return(
        <nav className='nav__bar' >
          <div className='nav__bar-author'>
              <a href='#header'><h2 className='author'>michał bodys</h2></a>
              <p>portfolio<span className='year'>2023</span></p>
            </div>
            <div className='nav__bar-links'>
              <a href="#about" className='nav__link'>about</a>
              <a href="#projects" className='nav__link'>projects</a>
              <a href="#skills" className='nav__link'>skills</a>
              <a href="#contact" className='nav__link'>contact</a>
          </div>
          <div className='nav__burger-icon'>
                <div className='burger-icon-line'></div>
            </div>
        </nav>
    )
}

export default NavBar