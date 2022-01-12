import React from 'react';
import { Link } from 'react-router-dom';

import { rmvClassActive, isActive, onLoadActive } from "../js/header.js";
import 'bootstrap-icons/font/bootstrap-icons';

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
                  <svg>
                    <use href="#languageSVG" />
                  </svg>
                </button>
                <div id='languageDropdown' className='navigation__language__dropdown'>
                  <a>
                    <svg>
                      <use href="#gbSVG" />
                    </svg>
                  </a>
                  <a>
                  <svg>
                      <use href="#irSVG" />
                    </svg>
                  </a>
                  <a>
                  <svg>
                      <use href="#jpSVG" />
                    </svg>
                  </a>
                </div>
             </div>
          </div>
          <div className='navigation__title-container'>
            <Link onClick={() => rmvClassActive()} className="navigation__title" to="/">
              <i className="bi bi-house-door"></i>
              <i class="bi bi-house-door-fill"></i>
            </Link>
          </div>
        </nav>
      </header>
    );
  }
};

export default Header;