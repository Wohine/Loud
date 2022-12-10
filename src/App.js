import './App.css';
import Login from './Login';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from './Register';
import Reset from './Reset';
import Player from './Player';
import Welcome from './Welcome';
import SearchPage from './SearchPage';
import UploadPage from './UploadPage';
import Home from './Home';
import HomePage from './HomePage';
import PlaylistPage from './PlaylistPage';

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<Welcome />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/reset" element={<Reset />} />
          <Route exact path="/home" element={<HomePage />} />
          <Route exact path="/search" element={<SearchPage />} />
          <Route exact path="/upload" element={<UploadPage />} />
          <Route exact path="/playlist" element={<PlaylistPage />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;