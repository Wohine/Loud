import React from 'react'
import Footer from '../Components/Footer'
import Playlist from '../Components/Playlist'
import Sidebar from '../Components/Sidebar'
import "../Styles/Player.css"

function PlaylistPage() {
  return (
    <div className='player'>
        <div className='player__body'>
          <Sidebar/>
          <Playlist/>
        </div>
        <Footer/>
    </div>
  )
}

export default PlaylistPage