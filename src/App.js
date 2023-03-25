import Click from './Components/Click';



function App() {
  return (
    <div className="App">
      <header>
        <nav className='nav__bar'>
          <div className='nav__bar-author'>
            <h2>Michał Bodys</h2>
            <p>Portfolio<span className='year'>2023</span></p>
          </div>
          <div className='nav__bar-links'>
            <a href="/" className='nav__link'>Home</a>
            <a href="/" className='nav__link'>About me</a>
            <a href="/" className='nav__link'>Projects</a>
            <a href="/" className='nav__link'>Skills</a>
          </div>
        </nav>
      <Click/>
        <div className='i/9'></div>
      </header>
    </div>
  );
}

export default App;
