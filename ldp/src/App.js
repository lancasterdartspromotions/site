import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Row,
  Col,
  Jumbotron,
  Button
} from 'reactstrap';

import { Switch, Route, Link } from 'react-router-dom'; // import the react-router-dom components
import { Home, About, Events, Contact } from './pages' // import our pages
import SimpleSlider from './Banner'
import './App.css';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';



const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/About' component={About}/>
      <Route exact path='/Events' component={Events} />
      <Route exact path='/contact' component={Contact} />
    </Switch>
  </main>
)

const Banner = () => (
  <div className="banner">
  <SimpleSlider />
  </div>

)

/*
<NavItem>
  <NavLink href="/3"> Page 3 </NavLink>
</NavItem>
*/

const Header = () => (
  <div>
    <Navbar className="navbar navbar-expand-lg navbar-light  bg-light">
      <NavbarBrand className="navbar-brand" href="/">Home</NavbarBrand>
      <NavItem>
        <NavLink href="/About"> About </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/Events"> Events </NavLink>
      </NavItem>
       <NavItem>
        <NavLink href="/contact"> Contact Us </NavLink>
      </NavItem>
      
      <div className="ml-auto">
        <a class="nav-email" href="mailto:lancasterdartspromotions@gmail.com"><FontAwesomeIcon className="nav-email-icon" icon="envelope" />lancasterdartspromotions@gmail.com</a>
        <a class="nav-facebook" href="https://www.facebook.com/LancasterDartsPromotions/"><FontAwesomeIcon icon={['fab', 'facebook']} /></a>
      </div>
    
    </Navbar>
  </div>
)

const App = () => (
  <div>
    <Header />
    <Banner />
    <Main />
  </div>
)


export default App;
