import {Card , Button} from 'react-bootstrap';
import { FaGithub} from "react-icons/fa"
import { AiFillEye } from "react-icons/ai";
import './ProjectCardList.css'
export const ProjectCard =(props) =>{
  const {Name,text,imgUrl, key ,link,live} =props.items;
  const handleClick =() =>{

    window.location.replace(link);

    return null;
  }
  const handleClicklive =() =>{
    window.location.replace(live);
  }

   
    return(<div key={key} >
    <Card className='Project-Card' data-aos="fade-up" data-aos-delay="1000" data-aos-duration="3000" data-aos-once="true">
    <Card.Body>
      <Card.Title className='Project-card-title'>{Name}</Card.Title>
      <div className='image-container'><img src={imgUrl}  alt={Name}/></div>
      <Card.Text className='Cardtext'>{text}</Card.Text>
      <Button variant="outline-dark" onClick={handleClick} className="project-button"><FaGithub size='1.5rem'/> Github</Button> 
      {live && <Button variant="outline-dark" onClick={handleClicklive} className="project-button-eye"><AiFillEye size='1.5rem'/> Live</Button> }
    </Card.Body>
  </Card>
    </div>)
}

//* add  view link for the project as same*