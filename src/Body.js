import PlayCircleOutline from '@mui/icons-material/PlayCircleOutline'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import React from 'react'
import "./Body.css"
import Header from './Header'
import SongRow from './SongRow'

function Body() {
    return (
      <div className='body'>
        
        <Header/>

        <div className='body__info'>
          <img src='data:image/png;base64,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' alt=''/>
          <div className='body__infoText'>
            <strong>Playlist</strong>
            <h2>Favoritter</h2>
            <p>description</p>
          </div>
        </div>
        <div className='body__songs'>
          <div className='body__icons'>
            <PlayCircleOutline className='body__shuffle'/>
            <MoreHorizIcon/>
          </div>
            <SongRow/>
            <SongRow/>
            <SongRow/>
            <SongRow/>
            <SongRow/>
            <SongRow/>
            <SongRow/>
            <SongRow/>
            <SongRow/>
        </div>
      </div>
    )
}

export default Body