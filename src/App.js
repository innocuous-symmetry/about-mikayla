import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Projects from './pages/Projects';
import Technologies from './pages/Technologies';
import Links from './pages/Links';
import InProgress from './pages/InProgress';
import './App.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Welcome />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/in-progress' element={<InProgress />} />
            <Route path='/technologies' element={<Technologies />} />
            <Route path='/links' element={<Links />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
