import './App.css';
import Landing from './components/headerbar';
import About from './components/about';
import ProjectsDisplay from './components/projects';
import Resume from './components/resume';

function App() {
  return (
    <div className="App">
      <Landing />
      <About />  
      <hr></hr>
      <ProjectsDisplay/>
      <Resume />
    </div>
);
}

export default App;
