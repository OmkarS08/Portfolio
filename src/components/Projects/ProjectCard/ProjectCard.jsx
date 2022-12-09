import {Card , Button} from 'react-bootstrap';
import { FaGithub} from "react-icons/fa"
import './ProjectCardList.css'
export const ProjectCard =(props) =>{
  const {Name,text,imgUrl, id ,link} =props.items;
  const handleClick =() =>{

    window.location.replace(link);

    return null;
  }

   
    return(<div key={id} >
    <Card className='Project-Card'>
    <Card.Body>
      <Card.Title className='Project-card-title'>{Name}</Card.Title>
      <div className='image-container'><img src={imgUrl}  alt={Name}/></div>
      <Card.Text className='Cardtext'>{text}</Card.Text>
      <Button variant="outline-dark" onClick={handleClick} className="project-button"><FaGithub size='1.5rem'/> Github</Button>
    </Card.Body>
  </Card>
    </div>)
}
