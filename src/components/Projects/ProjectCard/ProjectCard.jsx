import {Card , Button} from 'react-bootstrap';
import './ProjectCardList.css'
export const ProjectCard =(props) =>{
  const {Name,text,imgUrl, id ,link} =props.items;
  const handleClick =() =>{

    window.location.replace(link);

    return null;
  }

   
    return(<div key={id} >
    <Card className='Card'>
    <Card.Body>
      <Card.Title className='tittle'>{Name}</Card.Title>
      <div className='image-container'><img src={imgUrl} /></div>
      <Card.Text className='Cardtext'>{text}</Card.Text>
      <Button variant="dark" onClick={handleClick} className="project-button">GitHub</Button>
    </Card.Body>
  </Card>
    </div>)
}
