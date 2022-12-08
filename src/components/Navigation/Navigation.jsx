/************************************************************** */
import {Container,Nav , Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import { scroller } from 'react-scroll';
import './Navigation.css'
/************************************************************** */
// Components
import { About } from '../About/About';
import { Home } from '../Home/Home';
import { Projects } from '../Projects/Projects';
import { Skills } from '../Skills/Skills';
import { Contacts } from '../Contacts/Contacts';
import {FaHome} from 'react-icons/fa'
/************************************************************** */
export const Navigation =() =>{
    return(<div >
      <Navbar  sticky="top" bg="dark" variant="dark"  >
        <Container >
          <Navbar.Brand className='Logo' as={Link} onClick={() => scroller.scrollTo('/', {smooth: true,offset: -70, duration: 500,})} ><FaHome size='2rem'/></Navbar.Brand>
          <Nav className="me-auto">
             <Nav.Link as={Link}  onClick={() => scroller.scrollTo('about', {smooth: true, offset: -70, duration: 500,})}  className='nav-links1'>About</Nav.Link>    
            <Nav.Link as={Link} onClick={() => scroller.scrollTo('Skills', {smooth: true,offset: -70, duration: 500,})}   className='nav-links1'>Skills</Nav.Link>
            <Nav.Link as={Link} onClick={() => scroller.scrollTo('Projects', {smooth: true,offset: -70, duration: 500,})}  className='nav-links1'>Projects</Nav.Link>
            <Nav.Link as={Link} onClick={() => scroller.scrollTo('Contacts', {smooth: true,offset: -70, duration: 500,})}  className='nav-links1'>Contacts</Nav.Link>  
          </Nav>
        </Container>
      </Navbar>
      <section id="/">{<Home/>}</section>
      <section id="about">{<About/>}</section>  
      <section id='Skills'>{<Skills/>}</section>  
      <section id ='Projects'>{<Projects/>}</section>
      <section id ='Contacts'>{<Contacts/>}</section>        
    </div>)
}