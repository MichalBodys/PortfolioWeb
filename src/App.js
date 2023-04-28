

import Header from './Sections/header/Header';
import AboutMe from './Sections/Aboutme/AboutMe';
import './Styles/App.scss'
import './Styles/global.scss'
import {  useState } from 'react';
import Projects from './Sections/projects/Projects';
import Cursor from './Components/Cursor/Cursor';




const App = () => {

// console.log(projects);
//   console.log(projects[0].photos[0]);


const  [count, setCount] = useState(0)
const [btnMsg, setBtnMsg] = useState('Click me !')

const clickHandler = () => {
  setCount(count + 1)
  if(count === 0)   setBtnMsg('Again!')
  if(count === 3) setBtnMsg('that all.... for now')
  if(count === 4) setCount(1) ;

  console.log(count);
};


  return (
  <div className="App">
    {/* <Cursor/> */}
    <Header/>
    <AboutMe/>
    <Projects/>
    <section className='skils'>
      <div className='container'>
          <button onClick={clickHandler}>{btnMsg}</button>
        <div className="skills-box">
        <div className='skill-box'>
            <span className={(count === 0 ? 'show' : '')}>programing technologies that i already used</span>
          </div>
          <div className='skill-box'>
            <span className={(count === 1 ? 'show' : '')}>html</span>
            <span className={(count === 1 ? 'show' : '')}>Css</span>
            <span className={(count === 1 ? 'show' : '')}>Sass</span>
            <span className={(count === 1 ? 'show' : '')}>JavaScript</span>
            <span className={(count === 1 ? 'show' : '')}>React</span>
          </div>
          <div className='skill-box'>
            <span className={(count === 2 ? 'show' : '')}>Redux</span>
            <span className={(count === 2 ? 'show' : '')}>GIT</span>
            <span className={(count === 2 ? 'show' : '')}>NPM</span>
            <span className={(count === 2 ? 'show' : '')}>Vue</span>
            <span className={(count === 2 ? 'show' : '')}>Yarn</span>
          </div>
          <div className='skill-box'>
            <span className={(count === 3 ? 'show' : '')}>Bootstrap</span>
            <span className={(count === 3 ? 'show' : '')}>RWD</span>
            <span className={(count === 3 ? 'show' : '')}>AJAX</span>
          </div>
          <div className='skill-box'>
            <span className={(count === 4 ? 'show' : '')}>i learn something new every day</span>
          </div>

        </div>
      </div>
    </section>
  </div>
  );
}

export default App;
