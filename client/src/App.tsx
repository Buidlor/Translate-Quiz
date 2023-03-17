import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';
import ShowAll from './pages/ShowAll';

function App() {

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/ShowAll" element={<ShowAll />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </div>
    </Router>
  );

}

export default App
