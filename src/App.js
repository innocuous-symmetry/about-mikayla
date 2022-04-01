import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Projects from './pages/Projects';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Welcome />} />
            <Route path='/projects' element={<Projects />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
