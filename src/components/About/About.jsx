import './About.css'
import {SiJavascript,SiHtml5,SiCss3,SiReact,SiMongodb} from 'react-icons/si'
import {FaNodeJs,FaWordpress } from "react-icons/fa";
/************************************* */
import Button from 'react-bootstrap/Button';
export const About =() =>{

    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('Omkar_shelke_Resume.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Omkar_shelke_Resume';
                alink.click();
            })
        })
    }

    return(<div className="About" >
    <h1 className='about-title'>About me</h1>
    <div className='icons-container'>
        <ul>
        <li><SiHtml5 size='3.5em' color='#f06529'/></li>
        <li><SiCss3 size='3.5em' color='blue'/></li>
        <li><SiJavascript size='3.5em' color ='#FFD600'/></li>
        <li><SiReact size='3.5em' color='#80DEEA'/></li>
        <li><SiMongodb size='3.5em' color='gr589636een'/></li>
        <li><FaNodeJs size='3.5em' color='6cc24a'/></li>
        <li><FaWordpress size='3.5em' color= '21759b'/></li>
        </ul>
    </div>
    <p className='text-area'>Hello, my name is Omkar Shelke. I am currently pursuing a Masters degree at the BITS Pilani (Birla Institute of Technology) Dubai campus.
    <br/>I am a full-stack MERN Developer.</p>
    <Button onClick={onButtonClick} variant="outline-dark" size="lg" className='About-button'>Resume/CV</Button>
    </div>)
}