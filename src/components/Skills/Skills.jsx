import {Card }from 'react-bootstrap';
import './Skill.css'
import SkillLabel from './SkillLabel/SkillLabel';
 export const  Skills =() =>{

    return(<div className='jb2'>
    <h2 className='Skills-title'>Skills</h2>
    <div className='Skills'>
    <Card body className='Card'>
    <div className='card-title'><h2>Front-End</h2></div>
    <SkillLabel label = 'HTML' variant ='dark' percentage={70} />
    <SkillLabel label ='CSS'  variant ='dark' percentage={65} />
    <SkillLabel label ='Javascript'  variant ='dark' percentage={75} />
    <SkillLabel label ='BootStrap'  variant ='dark' percentage={70} />
    <SkillLabel label ='React'  variant ='dark' percentage={60} />
    </Card>
    <Card body className='Card'>
    <div className='card-title'><h2>Back-End</h2></div>
    <SkillLabel label = 'NodeJS' variant ='dark' percentage={70} />
    <SkillLabel label ='Express'  variant ='dark' percentage={70} />
    <SkillLabel label ='MySQL, MONGODB, FireBase'  variant='dark' percentage={70} />
    <SkillLabel label ='REST API, POSTMAN'  variant ='dark' percentage={60} />
    <SkillLabel label ='Netlify, Heroku'  variant ='dark' percentage={60} />
    </Card>
    <Card body className='Card'>
    <div className='card-title'><h2>Design</h2></div>
    <SkillLabel label = 'Figma' variant ='dark' percentage={30} />
    <SkillLabel label ='Canva'  variant ='dark' percentage={60} />   
    </Card></div>
    </div>)
    
}