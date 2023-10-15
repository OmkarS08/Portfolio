import {Card }from 'react-bootstrap';
import {SiJavascript,SiHtml5,SiCss3,SiReact,SiMongodb,SiPhp,SiMysql,SiTypescript} from 'react-icons/si'
import {FaHeading, FaNodeJs,FaWordpress,FaGithub ,FaNpm} from "react-icons/fa";

import './Skill.css'

 export const  Skills =() =>{

    return(<div className='jb2' >
    <h2 className='Skills-title' data-aos="fade-up" data-aos-delay="500" data-aos-duration="3000" data-aos-once="true">
    Skills</h2>
    <div className='skill-container'>
    <div className='skill-card' data-aos="fade-up" data-aos-delay="500" data-aos-duration="3000" data-aos-once="true"><SiHtml5 style={{ color: "#e34c26" }} size={75} /></div>
    <div className='skill-card' data-aos="fade-up" data-aos-delay="500" data-aos-duration="3000" data-aos-once="true"><SiCss3 style={{ color: "#264de4" }} size={75}/></div>
    <div className='skill-card' data-aos="fade-up" data-aos-delay="500" data-aos-duration="3000" data-aos-once="true"><SiJavascript style={{ color: "#f0db4f" }} size={75}/></div>
    <div className='skill-card' data-aos="fade-up" data-aos-delay="500" data-aos-duration="3000" data-aos-once="true"><SiReact style={{ color: "#61DBFB" }} size={75}/></div>
    <div className='skill-card' data-aos="fade-up" data-aos-delay="500" data-aos-duration="3000" data-aos-once="true"><SiTypescript style={{ color: "#007acc" }} size={75}/></div>
    <div className='skill-card' data-aos="fade-up" data-aos-delay="500" data-aos-duration="3000" data-aos-once="true"><FaNodeJs style={{ color: "#68a063" }} size={75}/></div>
    <div className='skill-card' data-aos="fade-up" data-aos-delay="500" data-aos-duration="3000" data-aos-once="true"><SiMongodb style={{ color: "#68a063" }} size={75}/></div>
    <div className='skill-card' data-aos="fade-up" data-aos-delay="500" data-aos-duration="3000" data-aos-once="true"><SiMysql style={{ color: "#00758F" }} size={75}/></div>
    <div className='skill-card' data-aos="fade-up" data-aos-delay="500" data-aos-duration="3000" data-aos-once="true"><FaWordpress style={{ color: "#00758F" }} size={75}/></div>
    <div className='skill-card' data-aos="fade-up" data-aos-delay="500" data-aos-duration="3000" data-aos-once="true"><SiPhp style={{ color: "#474A8A" }} size={75}/></div>
    <div className='skill-card' data-aos="fade-up" data-aos-delay="500" data-aos-duration="3000" data-aos-once="true"><FaGithub style={{ color: "#333" }} size={75}/></div>
    <div className='skill-card' data-aos="fade-up" data-aos-delay="500" data-aos-duration="3000" data-aos-once="true"><FaNpm style={{ color: "#CC3534s" }} size={75}/></div>
    </div>
    </div>)
    
}

//* remove progress bar and add only the icons of the technology*