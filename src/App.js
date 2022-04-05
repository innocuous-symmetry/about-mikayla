import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Projects from './pages/Projects';
import Technologies from './pages/Technologies';
import Links from './pages/Links';
import CreativeWorks from './pages/CreativeWorks';
import InProgress from './pages/InProgress';
import './App.scss';

function App() {
  return (
    <div className="App">
      
      <header className="app-navbar">
        <h2 className="my-name">Mikayla Dobson</h2>
        <h2>Web Design Contractor</h2>
      </header>
      
      <main>
        <BrowserRouter>
            <Routes>
              <Route path='/' element={<Welcome />} />
              <Route path='/projects' element={<Projects />} />
              <Route path='/in-progress' element={<InProgress />} />
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
