import React from 'react';
import { Link } from 'react-router-dom';

const Header = () =>  {
    return(
    <header className="header">
      <nav className="navigation">
        <Link className="navigation__item navigation__item-first" to="/projects">Projects</Link>
        <Link className="navigation__item" to="/skills">Skills</Link>
        <Link className="navigation__item" to="/about">About Me</Link>
        <Link className="navigation__item" to="/contact">Contact</Link>
        <Link className="navigation__title" to="/">Home</Link>
      </nav>
    </header>
    );
};

export default Header;