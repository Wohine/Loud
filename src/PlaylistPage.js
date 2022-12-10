import React from 'react'
import Playlist from './Playlist'
import Sidebar from './Sidebar'

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