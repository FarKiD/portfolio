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
    this.langDropDownClickHandler();
  }

  /* 
    Opens the language dropdown if you click it
    Closes it when you click it again
    Closes it when you click outside of it
    Doesn't close it when you click inside the dropdown
  */
  langDropDownClickHandler = () => {
    document.addEventListener('click', (event) => {
      let languageContainer = 'navigation__language__container';
      let languageDropdown = 'navigation__language__dropdown';
      let targetElement = event.target;

      // Check if the thing you clicked contains the language container
      do {
        if (targetElement.className == languageContainer
            && !this.state.dropDownState){
          $('.navigation__language__dropdown').css({
            'visibility': 'visible',
            'opacity': '100%'
          });
          this.setState({
            dropDownState: true
          });
          return;
        } else if (targetElement.className == languageDropdown
            && this.state.dropDownState) {
              // return when you click the flags (for now)
              // TODO actually change language when you click the flags
              return;
          }

        targetElement = targetElement.parentNode;
      } while (targetElement);

      $('.navigation__language__dropdown').css({
        'visibility': 'hidden',
        'opacity': '0'
      });
      this.setState({
        dropDownState: false
      });
    });
  }
  
  render() {
    return(
      <header className="header">
        <nav className="navigation">
          <Link onClick={(e) => isActive(e, '/projects')} className="navigation__item navigation__item_first" to="/projects">Projects</Link>
          <Link onClick={(e) => isActive(e, '/skills')} className="navigation__item" to="/skills">Skills</Link>
          <Link onClick={(e) => isActive(e, '/about')} className="navigation__item" to="/about">About Me</Link>
          <div className='navigation__language'>
             <div className='navigation__language__container'>
                <button className='navigation__language__dropbtn'>
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