import './App.css';
import Landing from './components/headerbar';
import About from './components/about';
import ProjectsDisplay from './components/projects';
import Resume from './components/resume';
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <div className="App">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/fira-code@6.2.0/distr/fira_code.css"></link>
      <Landing />
      <About />  
      <hr></hr>
      <ProjectsDisplay/>
      <Resume />
      <Analytics/>
    </div>
);
}

export default App;
