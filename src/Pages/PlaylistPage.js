import React from 'react'
import Playlist from '../Components/Playlist'
import Sidebar from '../Components/Sidebar'

function PlaylistPage() {
  return (
    <div className='player'>
        <div className='player__body'>
          <Sidebar/>
          <Playlist/>
        </div>
    </div>
  )
}

export default PlaylistPage