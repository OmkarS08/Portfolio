import { Navigation } from './components/Navigation/Navigation';
import './App.css';
import { About } from './components/About/About';
import { Skills } from './components/Skills/Skills';
import { Projects } from './components/Projects/Projects';


function App() {
  return (
    <div>
    <Navigation/>
    <About/>
    <Skills/>
    <Projects/>
    </div>
  );
}

export default App;
