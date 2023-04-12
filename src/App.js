

import Header from './Sections/header/Header';
import AboutMe from './Sections/Aboutme/AboutMe';
import { useSelector } from 'react-redux';

import './Styles/App.scss'
import './Styles/global.scss'



const App = () => {
const projects = useSelector(state => state.projects)
console.log(projects);

  return (
  <div className="App">
      <Header/>
      <AboutMe/>
      <div className='projects'>
          <div className='container cards'>
            <ul>
              {projects.map(project => <div key={project.id}>
                <h3>{project.title}</h3>
                <p>{project.release}</p>
              </div>)}
            </ul>

          </div>


      </div>
  </div>
  );
}

export default App;
