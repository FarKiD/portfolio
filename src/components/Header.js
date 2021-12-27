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
          <Link onClick={(e) => isActive(e, '/projects')} className="navigation--item navigation--item_first" to="/projects">Projects</Link>
          <Link onClick={(e) => isActive(e, '/skills')} className="navigation--item" to="/skills">Skills</Link>
          <Link onClick={(e) => isActive(e, '/about')} className="navigation--item" to="/about">About Me</Link>
          <Link onClick={(e) => isActive(e, '/contact')} className="navigation--item" to="/contact">Contact</Link>
          <div className='navigation--title-container'>
            <Link onClick={() => rmvClassActive()} className="navigation--title" to="/">Home</Link>
          </div>
        </nav>
      </header>
    );
  }
};

export default Header;