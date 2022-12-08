
import { ProjectData}  from './projectData';
import { ProjectCard } from './ProjectCard/ProjectCard';
import './Project.css'
export const Projects = () =>{


    return(<div >
    <h2 className='page-title'>Projects</h2>
    <div className='ProjectCardList'>
    {ProjectData.map((items)=>{return <ProjectCard key ={items.id}  items ={items}/> })}    
    </div>
    
</div>)
}