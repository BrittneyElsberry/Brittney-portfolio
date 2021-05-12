import './App.css';
import Navigation from './components/Navigation/Navigation';
import Introduction from './components/Introduction/Introduction';
// import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import { Parallax } from 'react-parallax';
import styled from 'styled-components';





function App() {


  return (
    <div className="app-container">
    <Parallax>
      <Navigation />
      <Introduction/>
      {/* <About/> */}
      <Projects />
      <Contact/>
    </Parallax>
    </div>
  );
}

export default App;


const Card = styled.div`

.container{
  border-radius: 25%;
  background-color:  #edf2fb;
  height: 
}



`
