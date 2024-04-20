import { Navbar } from "./components/navbar/Navbar";
import { Intro } from './components/intro/Intro';
import { Experience } from './components/experience/Experience';
import { Portfolio } from "./components/portfolio/Portfolio";
import { Contacts } from './components/contacts/Contacts'
import "./App.css";
import './assets/styles/commotStyles.scss'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Portfolio />
      <Experience />      
      <Contacts />
    </div>
  );
}

export default App;
