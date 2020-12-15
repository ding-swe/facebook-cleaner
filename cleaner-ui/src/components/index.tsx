import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './Home'
import About from './About'


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
      <Router>
        <Switch>
          <Route path="/" component = {Home} exact/>
          <Route path="/about" component = {About} exact/>
        </Switch>
      </Router>
    </div>
  );
}

function CenterSquare(){
  return(
    <a className="center-square">Hello</a>
  )
}

interface Props {
  icon?: string; 
  children?: JSX.Element | string | JSX.Element[];
}

function Navbar(props:Props){
  return(
    <nav className="navbar">
      <ul className="navbar-nav"> {props.children} </ul>
    </nav>
  )
}

function NavItem(props:Props){

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
        <div> My Prof </div>
      </DropdownItem>

    </div>
  );
}

export default App;
