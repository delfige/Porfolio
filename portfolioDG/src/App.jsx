import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './style.scss';
import Navbar from './components/Navbar';
import Main from './components/main';
import Proyectos from './components/Proyectos';
import Contacto from './components/Contacto';
import Footer from './components/footer';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;