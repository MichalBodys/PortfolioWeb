

import Header from './Sections/header/Header';
import AboutMe from './Sections/Aboutme/AboutMe';
import './Styles/App.scss'
import './Styles/global.scss'
import {  useState } from 'react';
import Projects from './Sections/projects/Projects';
import Cursor from './Components/Cursor/Cursor';
import Skills from './Sections/Skills/Skills';
import Contact from './Sections/Contact/Contact';




const App = () => {

// console.log(projects);
//   console.log(projects[0].photos[0]);






  return (
  <div className="App">
    <Cursor/>
    <Header/>
    <AboutMe/>
    <Projects/>
    <Skills/>
    <Contact/>
    <footer className='footer'>
      <hr/>
      <div className='container'>
        <div className='footer-data'>
            <p>
            <span className='copyright'>&copy;2023</span> michał bodys poland
            </p>
             <ul className='social-list'>
              <li><a href="www.linkedin.com/in/michal-bodys"><i className="fa-brands fa-linkedin socials" ></i></a></li>
              <li><a href="https://github.com/MichalBodys"><i className="fa-brands fa-github socials"></i></a></li>
              <li><a href='mailto: bodysmic@gmail.com'><i className="fa-solid fa-envelope socials"></i></a></li>
            </ul>
        </div>
      </div>
    </footer>
  </div>
  );
}

export default App;
