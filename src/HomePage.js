import React from 'react';
import Home from './Home';
import "./HomePage.css";
import Sidebar from './Sidebar';

function HomePage() {
  return (
    <div className='homePage'>
        <div className='homePage__body'>
          <Sidebar/>
          <Home/>
        </div>
    </div>
  )
}

export default HomePage