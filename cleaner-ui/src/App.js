import React, {useState} from 'react';

function App() {
  return (
    <div>
      <Navbar>
        <NavItem icon="$$$"></NavItem>
        <NavItem icon="$$$"></NavItem>
        <NavItem icon="$$$"></NavItem>
        <NavItem>
          <DropdownMenu></DropdownMenu>
        </NavItem>
      </Navbar>
      <CenterSquare/>
    </div>
  );
}

function CenterSquare(){
  return(
    <a className="center-square">Hello</a>
  )
}

function Navbar(props){
  return(
    <nav className="navbar">
      <ul className="navbar-nav"> {props.children} </ul>
    </nav>
  )
}

function NavItem(props){

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

function DropdownMenu(){

  function DropdownItem(props){
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
        <div> My Prof </div>
      </DropdownItem>

    </div>
  );
}

export default App;
