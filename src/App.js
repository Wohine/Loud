import './App.css';
import Login from './Login';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from './Register';
import Reset from './Reset';
import Player from './Player';

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/reset" element={<Reset />} />
          <Route exact path="/home" element={<Player />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;