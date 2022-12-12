import React, { Fragment } from 'react';
import Home from '../Components/Home';
import "../Styles/HomePage.css";
import Sidebar from '../Components/Sidebar';
import Footer from "../Components/Footer"

function HomePage() {
  return (
    <div className='homePage'>
        <div className='homePage__body'>
          <Fragment>
            <Sidebar/>
            <Home/>
          </Fragment>
        </div>
    </div>
  )
}

export default HomePage