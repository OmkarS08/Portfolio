/************************************************************** */
import {Container,Nav,NavLink , Navbar} from 'react-bootstrap';
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
    return(<div  >
      <Navbar className='navigation-bar' collapseOnSelect expand='sm' sticky="top" bg="dark" variant="dark"  >
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Container>
        <Navbar.Collapse  id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink as={Link} onClick={() => scroller.scrollTo('/', {smooth: true,offset: -70, duration: 500,})}   className='nav-links1'><FaHome size='2rem'/></NavLink>
            <NavLink as={Link}  onClick={() => scroller.scrollTo('about', {smooth: true, offset: -70, duration: 500,})}  className='nav-links1'>About</NavLink>    
            <NavLink as={Link}  onClick={() => scroller.scrollTo('Skills', {smooth: true,offset: -70, duration: 500,})}   className='nav-links1'>Skills</NavLink>
            <NavLink as={Link}  onClick={() => scroller.scrollTo('Projects', {smooth: true,offset: -70, duration: 500,})}  className='nav-links1'>Projects</NavLink>
            <NavLink as={Link}  onClick={() => scroller.scrollTo('Contacts', {smooth: true,offset: -70, duration: 500,})}  className='nav-links1'>Contact me</NavLink>  
          </Nav>
         </Navbar.Collapse> 
        </Container>
      </Navbar>
      <section id="/">{<Home/>}</section>
      <section id="about">{<About/>}</section>  
      <section id='Skills'>{<Skills/>}</section>  
      <section id ='Projects'>{<Projects/>}</section>
      <section id ='Contacts'>{<Contacts/>}</section>        
    </div>)
}