import React from 'react';
import { Link } from 'react-router-dom';

import { rmvClassActive, isActive, onLoadActive } from "../js/header.js";
import 'bootstrap-icons/font/bootstrap-icons';
import flagGB from '../images/gb.svg';
import flagJP from '../images/jp.svg';
import flagIR from '../images/ir.svg';
import languageSVG from '../images/language.svg';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropDownState: false
    };
  }

  componentDidMount() {
    onLoadActive();
  }

  langDropDown(event) {
    if(!this.state.dropDownState) {
      event.preventDefault();
      $('.navigation__language__dropdown').css({
        'visibility': 'visible',
        'opacity': '100%'
      });
      this.setState({
        dropDownState: true
      });
    } else {
      event.preventDefault();
      $('.navigation__language__dropdown').css({
        'visibility': 'hidden',
        'opacity': '0'
      });
      this.setState({
        dropDownState: false
      });
    };
  }
  
  render() {
    return(
      <header className="header">
        <nav className="navigation">
          <Link onClick={(e) => isActive(e, '/projects')} className="navigation__item navigation__item_first" to="/projects">Projects</Link>
          <Link onClick={(e) => isActive(e, '/skills')} className="navigation__item" to="/skills">Skills</Link>
          <Link onClick={(e) => isActive(e, '/about')} className="navigation__item" to="/about">About Me</Link>
          <Link onClick={(e) => isActive(e, '/contact')} className="navigation__item" to="/contact">Contact</Link>
          <div className='navigation__language'>
             <div className='navigation__language__container'>
                <button onClick={(e) => this.langDropDown(e)} className='navigation__language__dropbtn'>
                  <img className='navigation__language__icon' src={languageSVG} />
                </button>
                <div id='languageDropdown' className='navigation__language__dropdown'>
                  <a>
                    <img className='navigation__language__icon navigation__language__icon--flag' src={flagGB} />
                  </a>
                  <a>
                    <img className='navigation__language__icon navigation__language__icon--flag' src={flagIR} />
                  </a>
                  <a>
                    <img className='navigation__language__icon navigation__language__icon--flag' src={flagJP} />
                  </a>
                </div>
             </div>
          </div>
          <div className='navigation__title-container'>
            <Link onClick={() => rmvClassActive()} className="navigation__title" to="/">Home</Link>
          </div>
        </nav>
      </header>
    );
  }
};

export default Header;