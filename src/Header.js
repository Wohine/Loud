import React from 'react'
import './Header.css'
import SearchIcon from "@mui/icons-material/Search";
function Header() {
  return (
    <div className='header'>
        <div className='header__left'>
            <input
                placeholder='Search for a song or artist'
                type="text"
            />
            <SearchIcon/>
        </div>
        <div className='header__right'>
            <h4>Martin Hodne</h4>
        </div>
    </div>
  )
}

export default Header
