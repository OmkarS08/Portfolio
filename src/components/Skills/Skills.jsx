import {Card , ProgressBar}from 'react-bootstrap';
import './Skill.css'
 export const  Skills =() =>{

    return(<div className='Skills'>
    <Card body className='Card'>
    <div className='Title'><h2>Front-End</h2></div>
    <div class='skill'>
    <h5>HTML CSS Javascript</h5>
    <ProgressBar variant="success" now={75} />
    </div>
    <div class='skill'>
    <h5>HTML CSS Javascript</h5>
    <ProgressBar variant="success" now={75} />
    </div>
    <div class='skill'>
    <h5>HTML CSS Javascript</h5>
    <ProgressBar variant="success" now={75} />
    </div>
    </Card>
    <Card body className='Card'>
    <div className='Title'><h2>Back-End</h2></div>
    <div class='skill'>
    <h5>HTML CSS Javascript</h5>
    <ProgressBar variant="success" now={75} />
    </div>
    <div class='skill'>
    <h5>HTML CSS Javascript</h5>
    <ProgressBar variant="success" now={75} />
    </div>
    <div class='skill'>
    <h5>HTML CSS Javascript</h5>
    <ProgressBar variant="success" now={75} />
    </div>
    </Card></div>)
}