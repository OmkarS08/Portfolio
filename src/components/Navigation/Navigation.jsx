/************************************************************** */
import {Container,Nav , Navbar} from 'react-bootstrap';
import {Link,Routes,Route} from 'react-router-dom'
import './Navigation.css'
/************************************************************** */
// Components
import { About } from '../About/About';
import { Home } from '../Home/Home';
import { Projects } from '../Projects/Projects';
import { Skills } from '../Skills/Skills';
import { Contacts } from '../Contacts/Contacts';
/************************************************************** */
export const Navigation =() =>{
    return(<div >
          <Navbar  sticky="top" bg="dark" variant="dark"  >
        <Container >
          <Navbar.Brand className='Logo' as={Link} to="/">Logo</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/Skills">Skills</Nav.Link>
            <Nav.Link as={Link} to="/Projects">Projects</Nav.Link>
            <Nav.Link as={Link} to="/Contacts">Contacts</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/Skills' element={<Skills/>}/>
        <Route path='/Projects' element={<Projects/>}/>
        <Route path='/Contacts' element={<Contacts/>}/>
      </Routes>
    </div>)
}