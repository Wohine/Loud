import React from 'react';
import "../Styles/Upload.css";
import Sidebar from '../Components/Sidebar';
import Upload from '../Components/Upload';

function UploadPage() {
  return (
    <div className='player'>
        <div className='uploadPage__body'>
          <Sidebar/>
          <Upload/>
        </div>
    </div>
  )
}

export default UploadPage