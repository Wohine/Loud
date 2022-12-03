import React from 'react';
import Body from './Body';
import Footer from './Footer';
import "./Player.css";
import Sidebar from './Sidebar';
import Upload from './Upload';

function UploadPage() {
  return (
    <div className='player'>
        <div className='player__body'>
          <Sidebar/>
          <Upload/>
        </div>
        <Footer/>
    </div>
  )
}

export default UploadPage