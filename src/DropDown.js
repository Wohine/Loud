import * as React from 'react';
import { auth } from './firebase';
import "./DropDown.css"

const DropDown = ({trigger, menu }) => {

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };

    return (
      <div className="dropdown">
        {React.cloneElement(trigger, {
            onClick: handleOpen,
        })}
        {open ? (
          <ul className="menu">
            {menu.map((menuItem, index) => (
              <li key={index} className="menu-item">
                {React.cloneElement(menuItem, {
                    
              })}</li>
            ))}
          </ul>
        ) : null}
      </div>
    );
  };

export default DropDown;