import './App.css';
import Navigation from './components/Navigation/Navigation';
import Introduction from './components/Introduction/Introduction';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import { Parallax } from 'react-parallax';

function App() {
  return (
    <div className="app-container">
    <Parallax>
      <Navigation/>
      <Introduction/>
      <About/>
      <Projects />
    </Parallax>
    </div>
  );
}

export default App;
