import './About.css'
import {SiJavascript,SiHtml5,SiCss3,SiReact,SiMongodb} from 'react-icons/si'
import {FaHeading, FaNodeJs,FaWordpress } from "react-icons/fa";

import { MDBCard, MDBCardBody, MDBContainer } from "mdb-react-ui-kit";
/************************************* */
import Button from 'react-bootstrap/Button';
export const About =() =>{

    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('Omkar_Shelke_Resume.pdf').then(response => {
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

    return(<div className="About " data-aos="zoom-in" data-aos-delay="50" data-aos-duration="3000" data-aos-once="true" >
    <h1 className='about-title'
     data-aos="fade-up" data-aos-delay="1000" data-aos-duration="3000" data-aos-once="true">About me</h1>
    <div className='Education-container'> 
    <h3>Education</h3>  
    <MDBContainer fluid className="py-5" style={{ backgroundColor: "white" }}>
      <div className="main-timeline">
        <div className="timeline left" data-aos="fade-up" data-aos-delay="1000" data-aos-duration="3000" data-aos-once="true">
          <MDBCard>
            <MDBCardBody className="p-2" >
            <img src='images/shantiniketan.png' className='education-img'></img>
              <h4>DY Patil Shantiniketan</h4>
              <p><strong>10th</strong></p>
              <p className="mb-0">
               <i>Kolhapur</i> 
              </p>
              <small>2014</small>
            </MDBCardBody>
          </MDBCard>
        </div>
        <div className="timeline right" data-aos="fade-up" data-aos-delay="1000" data-aos-duration="3000" data-aos-once="true">
          <MDBCard>
            <MDBCardBody className="p-2">
            <img src='images/Aejc.png' className='education-img'></img>
            <h4>AEJC Junior College</h4>
            <p><strong>HSC</strong></p>
              <p className="mb-0">
                <i>Tarapur</i>
              </p>
              <small>2014-2016</small>
            </MDBCardBody>
          </MDBCard>
        </div>
        <div className="timeline left" data-aos="fade-up" data-aos-delay="1000" data-aos-duration="3000" data-aos-once="true">
          <MDBCard>
            <MDBCardBody className="p-4">
            <img src='images/kit.png' className='education-img'></img>
            <h4>KIT'S College of Engineering</h4>
            <p><strong>Bachelors in Electronics & Telecommunication Engineering</strong></p>
              <p className="mb-0">
                <i>Kolhapur</i>
              </p>
              <small>2016-2020</small>
            </MDBCardBody>
          </MDBCard>
        </div>
        <div className="timeline right" data-aos="fade-up" data-aos-delay="1000" data-aos-duration="3000" data-aos-once="true">
          <MDBCard>
            <MDBCardBody className="p-2">
            <img src='images/bit.png' className='education-img'></img>
            <h4>BIT'S Pilani </h4>
            <p><strong>Master's in Software System</strong></p>
              <p className="mb-0">
               <i> Dubai</i>
              </p>
              <small>2021-2023</small>
            </MDBCardBody>
          </MDBCard>
        </div>
      </div>
    </MDBContainer>
</div>
    <div className='Education-container'> 
    <h3>Experience</h3>  
    <MDBContainer fluid className="py-5" style={{ backgroundColor: "white" }}>
      <div className="main-timeline">
        <div className="timeline left">
          <MDBCard>
            <MDBCardBody className="p-4" data-aos="fade-up" data-aos-delay="1000" data-aos-duration="3000" data-aos-once="true">
            <img src='images/KPIT.png' className='polo'></img>
              <h4>Trainee Engineer</h4>
              <p className="mb-0">
                Pune (remote)
              </p>
              <small>2020 May - 2020 DEC</small>
            </MDBCardBody>
          </MDBCard>
        </div>
        <div className="timeline right" data-aos="fade-up" data-aos-delay="1000" data-aos-duration="3000" data-aos-once="true">
          <MDBCard>
            <MDBCardBody className="p-4">
            <img src='images/Log9.png' className='polo'></img>
              <h4>Web Application Developer Intern</h4>
              <p className="mb-0">
                Banglore (remote)
              </p>
              <small>2023 Feb - 2023 May</small>
            </MDBCardBody>
          </MDBCard>
        </div>
        <div className="timeline left" data-aos="fade-up" data-aos-delay="1000" data-aos-duration="3000" data-aos-once="true">
          <MDBCard>
            <MDBCardBody className="p-4">
            <img src='images/download.png' className='polo'></img>
            <h4>Web Application Developer Intern</h4>
              <p className="mb-0">
                Jumeriah, Dubai
              </p>
              <small>2023 Feb - 2023 JUL</small>
            </MDBCardBody>
          </MDBCard>
        </div>
      </div>
    </MDBContainer>
</div>
    <div className='ResumeButton'>
        <Button  onClick={onButtonClick} variant="outline-dark" size="lg" className='About-button'>Resume/CV</Button>
    </div>
    </div>)
}

// add education line in between