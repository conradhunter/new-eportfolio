import './App.css';
import Nav from './Components/Nav';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import About from './pages/About';
import Languages from './pages/Languages';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
          <Routes>
            <div id='content__wrapper'>
              <Route exact path="/" element={<About/>}/>
              <Route exact path="/languages" element={<Languages/>}/>
              <Route exact path="/projects" element={<Projects/>}/>
              <Route exact path="/contact" element={<Contact/>}/>
            </div>

          </Routes>
      </div>
    </Router>
  );
}

export default App;
