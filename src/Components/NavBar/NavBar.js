import './NavBar.scss'

const NavBar = () => {
    return(
        <nav className='nav__bar '>
          <div className='nav__bar-author'>
              <h2>Michał Bodys</h2>
              <p>Portfolio<span className='year'>2023</span></p>
            </div>
            <div className='nav__bar-links'>
              <a href="/" className='nav__link'>Home</a>
              <a href="/" className='nav__link'>About me</a>
              <a href="/" className='nav__link'>Projects</a>
              <a href="/" className='nav__link'>Skills</a>
              <div className='nav__burger-icon'>
                <div className='burger-icon-line'>
              </div>
            </div>
          </div>
        </nav>
    )
}

export default NavBar