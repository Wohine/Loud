import React from 'react'
import "./Sidebar.css"
import SidebarOption from './SidebarOption'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { useStateValue } from './StateProvider';
import { Link } from 'react-router-dom';

function Sidebar() {

    const [{ playlists, dispatch }] = useStateValue();
    

    return (
        <div className='sidebar'>
                <img className='sidebar__logo' src='https://media.discordapp.net/attachments/1039205569048883344/1039216224816615504/logo-no-background.png?width=596&height=671' alt=''/>
            <SidebarOption Icon={HomeIcon} title="Home" link={"/home"}/>
            <SidebarOption Icon={LibraryMusicIcon} title="Upload music" link={"/upload"}/>
            
            <br/>
            <strong className="sidebar__title">PLAYLISTS</strong>
            <hr/>

            <SidebarOption title="Gaming" link={"/playlist"}/>
            <SidebarOption title="Rock"/>
            <SidebarOption title="Electro"/>
            <SidebarOption title="Kids music"/>
            <SidebarOption title="Happy High"/>
            <SidebarOption title="Workout"/>
        </div>
    )
}

export default Sidebar