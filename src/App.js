import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import AboutMe from './pages/AboutMe';
import Technologies from './pages/Technologies';
import Links from './pages/Links';
import CreativeWorks from './pages/CreativeWorks';
import Projects from './pages/Projects';
import './App.scss';

function App() {
  return (
    <div className="App">
      
      <header className="app-navbar">
        <a href="/" className="my-name">Mikayla Dobson</a>
        <h2>Web Design Contractor</h2>
      </header>
      
      <main>
        <BrowserRouter>
            <Routes>
              <Route path='/' element={<Welcome />} />
              <Route path='/about-me' element={<AboutMe />} />
              <Route path='/projects' element={<Projects />} />
              <Route path='/technologies' element={<Technologies />} />
              <Route path='/links' element={<Links />} />
              <Route path='/creative-works' element={<CreativeWorks />} />
            </Routes>
        </BrowserRouter>
      </main>

    </div>
  );
}

export default App;
