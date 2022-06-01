import './App.css';
import Nav from './Components/Nav';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './pages/About';
import Languages from './pages/Languages';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {

  window.oncontextmenu = function () {
    return false;
  };

  return (
    <Router>
      <div className="App">
        <Nav/>
            <div id='content__wrapper'>
              <Routes>
                <Route exact path="/" element={<About/>} />
                <Route exact path="/languages" element={<Languages/>} />
                <Route exact path="/projects" element={<Projects/>} />
                <Route exact path="/contact" element={<Contact/>} />
              </Routes>
            </div>
      </div>
    </Router>
  );
}

export default App;
