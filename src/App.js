

import Header from './Sections/header/Header';
import AboutMe from './Sections/Aboutme/AboutMe';
import './Styles/App.scss'
import './Styles/global.scss'
import { useRef, useState } from 'react';
import Projects from './Sections/projects/Projects';
import Cursor from './Components/Cursor/Cursor';




const App = () => {

// console.log(projects);
//   console.log(projects[0].photos[0]);

const  [count, setCount] = useState(0)
const [btnMsg, setBtnMsg] = useState('Click me !')

const clickHandler = () => {
  setCount(count + 1)
  if (count === 3)  setBtnMsg("im still learning ")
};


  return (
  <div className="App">
    <Cursor/>
    <Header/>
    <AboutMe/>
    <Projects/>
    <div className='skils'>
      <div className='container'>
        <button onClick={clickHandler}>{btnMsg}</button>
        <div className='skils__box'>
            <div className='skill-lane'><p><span className='first' style={{opacity: count >= 1 ? 1 : 0}}>React</span> <span className='second' style={{opacity: count >= 2 ? 1 : 0}}>SCSS</span> <span className='first' style={{opacity: count >= 1 ? 1 : 0}}>HTML</span><span className='third' style={{opacity: count >= 3 ? 1 : 0}}>CSS</span></p></div>
            <div className='skill-lane'><p><span className='second' style={{opacity: count >= 2 ? 1 : 0}}>React</span> <span className='first' style={{opacity: count >= 1 ? 1 : 0}}>SCSS</span> <span className='third' style={{opacity: count >= 3 ? 1 : 0}}>HTML</span> <span className='first' style={{opacity: count >= 1 ? 1 : 0}}>CSS</span></p></div>
            <div className='skill-lane'><p><span className='second' style={{opacity: count >= 2 ? 1 : 0}}>React</span> <span className='third' style={{opacity: count >= 3 ? 1 : 0}}>SCSS</span> <span className='first' style={{opacity: count >= 1 ? 1 : 0}}>HTML</span> <span className='second' style={{opacity: count >= 2 ? 1 : 0}}>CSS</span></p></div>
        </div>


      </div>

    </div>
  </div>
  );
}

export default App;
