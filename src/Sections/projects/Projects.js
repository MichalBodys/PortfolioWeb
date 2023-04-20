
import { useSelector } from 'react-redux'
import './Projects.scss'


const Projects = () => {
    const projects = useSelector(state => state.projects)
    return(
    <div className='projects'>
        <div className='container cards'>
          <ul>
            {projects.map(project =>
            <div key={project.id}>
                  <div className='projects-box'>
                    <div className='project-card'>
                      <div className='project-card__inner'>
                        <p className='project-card__number'>{project.id}</p>
                        <a href="/" className='web-link'>Visit site</a>
                        <h3>{project.title}</h3>
                        <p>Released: {project.release}</p>
                      </div>
                    </div>
                    {project.photos.map(photo =>
                    <div className='img-box' key={photo.nmb}>
                      <div className='img-holder'>
                        <img src={photo.src} alt="" />
                      </div>
                      <hr/>
                      <p>{photo.description}</p>
                    </div>
                    )}
                  </div>
            </div>)
            }
          </ul>
        </div>
    </div>
    )

}


export default Projects