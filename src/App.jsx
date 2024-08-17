import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Home from './pages/Home/Home';
import Experiences from './pages/Experiences/Experiences';
import Projects from './pages/Projects/Projects';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Button from './components/Outils/Button';

function App() {
  return (
    <Router>
      <>
        <div className='app'>
          <Header />
          <div className="content">
            {/* Le reste de ton site */}
            <Button />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/experiences" element={<Experiences />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
      </>
    </Router>
  );
}

export default App
