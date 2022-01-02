import React from 'react';
import { Link } from 'react-router-dom';

import { rmvClassActive, isActive, onLoadActive } from "../js/header.js";
import 'bootstrap-icons/font/bootstrap-icons';
import flagGB from '../images/gb.svg';
import flagJP from '../images/jp.svg';
import flagIR from '../images/ir.svg';

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
          <div className='navigation--language'>
             <div className='navigation--language--container'>
                <button onClick={(e) => langDropDown(e)} className='navigation--language--dropbtn'>
                  <img className='navigation--language--flag' src={flagGB} />
                  <i class="navigation--language--chevron bi bi-chevron-down"></i>
                </button>
                <div id='languageDropdown' className='navigation--language--dropdown'>
                  <img src={flagIR} />
                  <img src={flagJP} />
                </div>
             </div>
          </div>
          <div className='navigation--title-container'>
            <Link onClick={() => rmvClassActive()} className="navigation--title" to="/">Home</Link>
          </div>
        </nav>
      </header>
    );
  }
};

export default Header;