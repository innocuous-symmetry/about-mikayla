import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';

// pages
import Welcome from './pages/Welcome';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Technologies from './pages/Technologies';
import Links from './pages/Links';
import CreativeWorks from './pages/CreativeWorks';

function App() {
  return (
    <div className="App">

      {/*

      To do: implement sidebar navigation with Drawer component
      Work on styling in secondary pages
      Bug in CSS animation in Technologies
      Make list items in creative works iterable, as the gallery below
      Move gallery iteration logic to external util folder? Make reusable?

      */}
      
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
