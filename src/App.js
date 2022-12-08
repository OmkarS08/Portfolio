import { Navigation } from './components/Navigation/Navigation';
import './App.css';
import { About } from './components/About/About';
import { Skills } from './components/Skills/Skills';
import { Projects } from './components/Projects/Projects';
import { Contacts } from './components/Contacts/Contacts';
import { Footer } from './components/Footer/Footer';


function App() {
  return (
    <div>
    <Navigation/>
    <About/>
    <Skills/>
    <Projects/>
    <Contacts/>
    <Footer/>
    </div>
  );
}

export default App;
