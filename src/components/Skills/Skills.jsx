import {Card }from 'react-bootstrap';
import './Skill.css'
import SkillLabel from './SkillLabel/SkillLabel';
 export const  Skills =() =>{

    return(
    <div className='Skills'>
    <Card body className='Card'>
    <div className='Title'><h2>Front-End</h2></div>
    <SkillLabel label = 'HTML' variant ='info' percentage={70} />
    <SkillLabel label ='CSS'  variant ='info' percentage={65} />
    <SkillLabel label ='Javascript'  variant ='info' percentage={75} />
    <SkillLabel label ='BootStrap'  variant ='info' percentage={70} />
    <SkillLabel label ='React'  variant ='info' percentage={60} />
    </Card>
    <Card body className='Card'>
    <div className='Title'><h2>Back-End</h2></div>
    <SkillLabel label = 'NodeJS' variant ='info' percentage={70} />
    <SkillLabel label ='Express'  variant ='info' percentage={70} />
    <SkillLabel label ='MySQL, MONGODB, FireBase'  variant ='info' percentage={70} />
    <SkillLabel label ='REST API, POSTMAN'  variant ='info' percentage={60} />
    <SkillLabel label ='Netlify, Heroku'  variant ='info' percentage={60} />
    </Card>
    <Card body className='Card'>
    <div className='Title'><h2>Design</h2></div>
    <SkillLabel label = 'Figma' variant ='info' percentage={30} />
    <SkillLabel label ='Canva'  variant ='info' percentage={60} />   
    </Card></div>)
    
}