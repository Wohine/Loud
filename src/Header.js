import React from 'react'
import './Header.css'
import SearchIcon from "@mui/icons-material/Search";
import { auth, logout } from './firebase';
import Dropdown from './DropDown';
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";


function Header() {
  const [user] = useAuthState(auth);
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  

  const handleMenuOne = () => {
    // do something
    console.log('clicked one');
  };

  const handleMenuTwo = () => {
    logout();
    if (!user) navigate("/");
    console.log('clicked two');
  };

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
        <Dropdown
          open={open}
          trigger={<button className='header__dropDownMainButton'>{auth.currentUser.email}</button>}
          menu={[
        <button onClick={handleMenuOne}>Profile</button>,
        <button onClick={handleMenuTwo}>Sign Out</button>,
      ]}
    />
        </div>
    </div>
  )
}

export default Header
