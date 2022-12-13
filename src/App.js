import Login from './Pages/Login';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from './Pages/Register';
import Reset from './Pages/Reset';
import Welcome from './Pages/Welcome';
import UploadPage from './Pages/UploadPage';
import HomePage from './Pages/HomePage';
import PlaylistPage from './Pages/PlaylistPage';

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
          <Route exact path="/upload" element={<UploadPage />} />
          <Route exact path="/playlist" element={<PlaylistPage />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;