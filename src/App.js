

import Header from './Sections/header/Header';
import AboutMe from './Sections/Aboutme/AboutMe';
import { useSelector } from 'react-redux';
import './Styles/App.scss'
import './Styles/global.scss'




const App = () => {
const projects = useSelector(state => state.projects)
// console.log(projects);
//   console.log(projects[0].photos[0]);
  return (
  <div className="App">
    <Header/>
    <AboutMe/>
    <div className='projects'>
        <div className='container cards'>
          <ul>
            {projects.map(project =>
            <div key={project.id}>
              <div className=''>
                <div>
                  <div className='img-box'>
                    <div className='project-card'>
                      <div className='project-card__inner'>
                        <p className='project-card__number'>{project.id}</p>
                        <a href="#" className='web-link'>Visit site</a>
                        <h3>{project.title}</h3>
                        <p>Released: {project.release}</p>
                      </div>
                    </div>
                  {project.photos.map(photo =>
                  <div className='img-box'>
                    <img src={photo.src} alt="" />
                    <hr/>
                    <p>{photo.description}</p>
                  </div>
                    )}
                  </div>
                </div>
              </div>
            </div>)
            }
          </ul>
        </div>
    </div>
  </div>
  );
}

export default App;
