import React from 'react';
import Home from '../Components/Home';
import "../Styles/HomePage.css";
import Sidebar from '../Components/Sidebar';

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