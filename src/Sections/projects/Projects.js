
import { useSelector } from 'react-redux'
import './Projects.scss'
import Carousel from '../../Components/Carousel/Carousel'


const Projects = () => {


    const projects = useSelector(state => state.projects)

    return(
      <section id='projects' className='projects container'>
        {projects.map(project =>
        <div className='project_box' key={project.id}>
            <div className='project-card'>

                <p><span>title:</span> {project.title}</p>
                <p><span>release:</span> {project.release}</p>
                <p className='project_visit'><a href={project.url}>Visit site</a></p>

            </div>
            <Carousel projectId={project.id}/>
        </div>
        )}
      </section>
    )
}


export default Projects