import React from 'react';
import { Link } from 'react-router-dom';

import { rmvClassActive, isActive, onLoadActive } from "../js/header.js";

class Header extends React.Component {
  componentDidMount() {
    onLoadActive();
  }
  
  render() {
    return(
      <header className="header">
        <nav className="navigation">
          <Link onClick={(e) => isActive(e, '/projects')} className="navigation__item navigation__item-first" to="/projects">Projects</Link>
          <Link onClick={(e) => isActive(e, '/skills')} className="navigation__item" to="/skills">Skills</Link>
          <Link onClick={(e) => isActive(e, '/about')} className="navigation__item" to="/about">About Me</Link>
          <Link onClick={(e) => isActive(e, '/contact')} className="navigation__item" to="/contact">Contact</Link>
          <Link onClick={() => rmvClassActive()} className="navigation__title" to="/">Home</Link>
        </nav>
      </header>
    );
  }
};

export default Header;