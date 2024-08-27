import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.js';
import Art from './pages/Art';
import Software from './pages/Software';
import Amissara from './pages/Amissara';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/art" element={<Art/>} />
        <Route path="/software" element={<Software />} />
        <Route path="/amissara" element={<Amissara />} />
      </Routes>
    </Router>
  );
}

export default App;
