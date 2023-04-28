
import { useSelector } from 'react-redux'
import './Projects.scss'
import Carousel from '../../Components/Carousel/Carousel'


const Projects = () => {


    const projects = useSelector(state => state.projects)

    return(
      <div className='projects container'>
        {projects.map(project =>
        <div className='project_box' key={project.id}>
            <div className='project-card'>

                <p><span>Title:</span> {project.title}</p>
                <p><span>Release:</span> {project.release}</p>
              
            </div>
            <Carousel projectId={project.id}/>
        </div>
        )}
      </div>
    )
}


export default Projects