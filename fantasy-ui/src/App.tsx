import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './modules/Home/Home'
import About from './modules/About/About'
import Navbar, {NavItem, DropdownMenu, NavIcon} from './modules/Navbar/Navbar'


function App() {
  return (
    <div>
        <Navbar>
            <NavItem icon="About"></NavItem>
            <NavItem icon="Careers"></NavItem>
            <NavItem icon="Info"></NavItem>
            <NavIcon>
                <DropdownMenu></DropdownMenu>
            </NavIcon>
        </Navbar>
        <Router>
            <Switch>
                <Route path="/" component = {Home} exact/>
                <Route path="/about" component = {About} exact/>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
