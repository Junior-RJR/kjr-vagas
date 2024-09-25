import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import KJRVagas from './components/js/KJRVagas';
import CadastrarVaga from './components/js/CadastrarVaga';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<KJRVagas />} />
      <Route path="/cadastrar-vaga" element={<CadastrarVaga />} />
    </Routes>
  </Router>
  );
}

export default App;
