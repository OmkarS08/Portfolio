
import { ProjectData}  from './projectData';
import { ProjectCard } from './ProjectCard/ProjectCard';
import './Project.css'
export const Projects = () =>{


    return(<div className='project-start' >
    <h2 className='page-title' data-aos="fade-up" data-aos-delay="500" data-aos-duration="3000" data-aos-once="true">Projects</h2>
    <div className='ProjectCardList'>
    {ProjectData.map((items)=>{return <ProjectCard key ={items.id}  items ={items} /> })}    
    </div>
    
</div>)
}