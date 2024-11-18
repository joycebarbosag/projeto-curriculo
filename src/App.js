import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Inicio from './pages/Inicio';
import Projetos from './pages/Projetos';
import Contato from './pages/Contato';
import ForFun from './pages/ForFun';

function App() {
  return (
    <Router>
      <div className='container'>
        <Menu/>
        <Routes>
          <Route path="/" element={<Inicio/>}/>
          <Route path="/projetos" element={<Projetos/>}/>
          <Route path="/contato" element={<Contato/>}/>
          <Route path="/forfun" element={<ForFun/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;