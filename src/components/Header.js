import React from 'react';
import { Link } from 'react-router-dom';
 
const Header = () => {
  // Remove activation class from all navlinks
  const rmvClassActive = () => {
    $('.navigation__item').removeClass('navigation__active');
  };

  // Select the target nav item and make it active
  const isActive = (event, path) => {
    if($(event.target).attr('href') === path) {
      rmvClassActive();
      $(event.target).addClass('navigation__active');
    }
  };

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
};

export default Header;