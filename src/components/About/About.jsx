import './About.css'
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

    return(<div className="About">
    <h1>About me</h1>
    <img src='/images/cover.png' className='About-cover' alt='cover'></img>
    <p>Hello, my name is Omkar Shelke. I am currently pursuing a Masters degree at the BITS Pilani (Birla Institute of Technology) Dubai campus.
    <br/>I am a full-stack MERN Developer.</p>
    <Button onClick={onButtonClick} variant="outline-dark" size="lg">Resume/CV</Button>
    </div>)
}