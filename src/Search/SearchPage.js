import PlayCircleOutline from '@mui/icons-material/PlayCircleOutline'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import React from 'react'
import Header from './Header'
import SongRow from '../SongRow'
import {UseState} from 'react';
import Sidebar from './Sidebar'
import SearchBody from '../SearchBody'
import Footer from '../Navigation/Footer'

function SearchPage() {

  

    return (
      <div className='SearchPage'>
        
        <div className='player__body'>
          <Sidebar/>
          <SearchBody/>
        </div>
        <Footer
        />
      </div>
    )
}

export default SearchPage