import React from 'react'
import "./SidebarOption.css"
import { Link } from 'react-router-dom';

function SidebarOption({Icon, title, link}) {
  return (
    <div className='sidebarOption'>
        {Icon && <Icon className="sidebarOption__icon" />}
        <Link to={link}>{title}</Link>
    </div>
  )
}

export default SidebarOption