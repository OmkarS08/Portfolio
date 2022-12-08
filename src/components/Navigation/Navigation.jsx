/************************************************************** */
import {Container,Nav , Navbar} from 'react-bootstrap';
import {Routes,Route} from 'react-router-dom'
import { Link } from 'react-scroll';
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
          <Navbar.Brand className='Logo' as={Link} to="/"><FaHome size='2rem'/></Navbar.Brand>
          <Nav className="me-auto">
            <Link smooth spy to="about"> About </Link>
            {/* <Nav.Link as={Link}  to="/about" className='nav-links1'>About</Nav.Link>
            <Nav.Link as={Link} to="/Skills"  className='nav-links1'>Skills</Nav.Link>
            <Nav.Link as={Link} to="/Projects"  className='nav-links1'>Projects</Nav.Link>
            <Nav.Link as={Link} to="/Contacts"  className='nav-links1'>Contacts</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
      <section id="/">{<Home/>}</section>
      <section id="about">{<About/>}</section>            
      {/* <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/Skills' element={<Skills/>}/>
        <Route path='/Projects' element={<Projects/>}/>
        <Route path='/Contacts' element={<Contacts/>}/>
      </Routes> */}
    </div>)
}