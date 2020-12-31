import React, {useState} from 'react';
import './Navbar.css'

interface Props {
    icon?: string; 
    children?: React.ReactNode;
}


export function NavLogo(){
  return(
    <a href="#" className="nav-left">
      fantaaskt
    </a>
  )
}

export function NavItem(props:Props){  
    return(
      <li className="nav-item">
        <a href="#" className="nav-button-text">
          {props.icon}
        </a>
      </li>
    )
}

export function NavIcon(props:Props){
    const [open, setOpen] = useState(false);
  
    return(
      <li className="nav-item">
        <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
          {props.icon}
        </a>
        {open && props.children}
      </li>
    )
}

  
export function DropdownMenu(){
  
    interface Icons {
        leftIcon?: string; 
        rightIcon?: string; 
        children?: JSX.Element | string;
    }
  
    function DropdownItem(props:Icons){
      return(
        <a href='#' className="menu-item">
          <span className="icon-button">{props.leftIcon}</span>
  
          {props.children}
  
          <span className="icon-right">{props.rightIcon}</span>
  
        </a>
      )
    }
  
    return (
      <div className="dropdown">
        <DropdownItem>My Profile</DropdownItem>
        <DropdownItem
          rightIcon={'>'}>
          <div> Second tab </div>
        </DropdownItem>
  
      </div>
    );
}

export default function Navbar(props:Props){
    return(
        <nav className="navbar">
          <NavLogo/>
          <ul className="navbar-nav"> {props.children} </ul>
        </nav>
    )
}
  
 