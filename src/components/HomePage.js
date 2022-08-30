import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Cookies from 'universal-cookie';

import store from '../store/store';

import { indexLoad } from "../js/index.js";
import { rmvClassActive, activateNavItem } from "../js/header.js";
import { useDispatch } from 'react-redux';
import { switchJapanese, switchEnglish, switchFarsi } from '../util/languageSlice';

import "../styles/index.scss";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cookieLanguage: new Cookies().get('language')
    };
  }

  // makes the router to reload the script
  componentDidMount() {
    indexLoad(store.getState().language.value.language);
    rmvClassActive();

    if(this.state.cookieLanguage === 'farsi') {
      this.props.languageCookieDispatch('farsi');
    } else if (this.state.cookieLanguage === 'english') {
      this.props.languageCookieDispatch('english');
    } else {

    }
  }

  componentWillUpdate() {
    if(store.getState().language.value.language === 'farsi') {
      $('body').css({
        'font-family': "'vazirmatn', Arial, sans-serif",
        'letter-spacing': '0.05rem'
      });
      
      $(`
        .intro__paragraph,
        .second__paragraph,
        .outro__content,
        .intro__link,
        .outro__link
      `).css({
        'direction': 'rtl'
      });
      $(`
        .intro__text,
        .second__text
      `).css({
        'align-items': 'flex-end'
      });
    } else if (store.getState().language.value.language === 'english') {
      $('body').css({
        'font-family': "'outfit', Arial, Helvetica, sans-serif"
      });

      $(`
        .intro__paragraph,
        .second__paragraph,
        .outro__content,
        .intro__link,
        .outro__link
      `).css({
        'direction': 'ltr'
      });
      $(`
        .intro__text,
        .second__text
      `).css({
        'align-items': 'flex-start'
      });
    } else {

    }
  }

  render() {
    return(
      <>
        <div className="container-fluid">
          <main>
            <div className="intro row">
              <div className="col-4 col-md-2 intro__title">
                <h2 className='intro__h2 intro__h2--first'>
                {
                  store.getState().language.value.content.index.title1.split("\n")[0]
                }
                <br />
                {
                  store.getState().language.value.content.index.title1.split("\n")[1]
                }
                </h2>
              </div>
              <div className="intro__text col-6 col-md">
                <p className="intro__paragraph">
                  {
                    store.getState().language.value.content.index.content1.split("\n")[0]
                  }
                  <span className='neon-text'>
                    {
                      store.getState().language.value.content.index.neon[0]
                    }
                  </span>
                  <br />
                  {
                    store.getState().language.value.content.index.content1.split("\n")[1]
                  }
                </p>
                <Link onClick={(e) => activateNavItem(e, '/about')} className="intro__link" to="/about">
                  {
                    store.getState().language.value.content.index.link1
                  }
                </Link>
              </div>
              <div className="intro__banner col-4 col-sm"></div>
            </div>
            <div className="second row">
              <div className="second__title col-4 col-md-6 col-lg-7 col-xl-8">
                <h2 className='intro__h2 intro__h2--second'>
                  {
                    store.getState().language.value.content.index.title2.split("\n")[0]
                  }
                  <br />
                  {
                    store.getState().language.value.content.index.title2.split("\n")[1]
                  }
                </h2>
              </div>
              <div className='second__text col-6 col-md'>
                <p className='second__paragraph'>
                  {
                    store.getState().language.value.content.index.content2.split("\n")[0]
                  }
                  <span className='neon-text'>
                    {
                      store.getState().language.value.content.index.neon[1]
                    }
                  </span>
                  <br />
                  {
                    store.getState().language.value.content.index.content2.split("\n")[1]
                  }
                </p>
                <Link onClick={(e) => activateNavItem(e, '/projects')} className='second__link' to='/projects#portfolio'>
                  {
                    store.getState().language.value.content.index.link2
                  }
                </Link>
              </div>
              <div className='second__banner col-4 col-sm'></div>
            </div>
            <section>
              <div className='outro row'>
                <div className='outro__boxes col-12 col-md'>
                  <div className='outro__content'>
                    <h4>
                      {
                        store.getState().language.value.content.index.outroHeader1
                      }
                    </h4>
                    <p>
                      {
                        store.getState().language.value.content.index.outroContent1
                      }
                    </p>
                  </div>
                  <a className='outro__btn' href='https://github.com/FarKiD/portfolio' target="_blank">
                    <i className='bi bi-github'></i>
                    {
                      store.getState().language.value.content.index.outroBtn1
                    }
                  </a>
                </div>
                <div className='outro__boxes col-12 col-md'>
                  <div className='outro__content'>
                    <h4>
                      {
                        store.getState().language.value.content.index.outroHeader2
                      }
                    </h4>
                    <p>
                      {
                        store.getState().language.value.content.index.outroContent2.split("\n")[0]
                      }
                      <br />
                      {
                        store.getState().language.value.content.index.outroContent2.split("\n")[1]
                      }
                    </p>
                  </div>
                  <a className='outro__btn' href='https://t.me/farkid' target="_blank">
                    <i className='bi bi-telegram'></i>
                    {
                      store.getState().language.value.content.index.outroBtn2
                    }
                  </a>
                </div>
              </div>
              <div className="slider__container">
                <section className="slide-option">
                  <div id="infinite" className="highway-slider">
                    <div className="container highway-barrier">
                      <ul className="highway-lane">
                        <li className="highway-car">
                          <svg>
                            <use href="#cssLogo" />
                          </svg>
                        </li>
                        <li className="highway-car">
                          <svg>
                            <use href="#sassLogo" />
                          </svg>
                        </li>
                        <li className="highway-car">
                          <svg>
                            <use href="#bootstrapLogo" />
                          </svg>
                        </li>
                        <li className="highway-car">
                          <svg>
                            <use href="#reactLogo" />
                          </svg>
                        </li>
                        <li className="highway-car">
                          <svg>
                            <use href="#reduxLogo" />
                          </svg>
                        </li>
                        <li className="highway-car">
                          <svg>
                            <use href="#nodejsLogo" />
                          </svg>
                        </li>
                        <li className="highway-car">
                          <svg>
                            <use href="#mongodbLogo" />
                          </svg>
                        </li>
                        <li className="highway-car">
                          <svg>
                            <use href="#mySQLLogo" />
                          </svg>
                        </li>
                        <li className="highway-car">
                          <svg>
                            <use href="#jestLogo" />
                          </svg>
                        </li>
                        <li className="highway-car">
                          <svg>
                            <use href="#reactRouterLogo" />
                          </svg>
                        </li>
                        
                        <li className="highway-car">
                          <svg>
                            <use href="#cssLogo" />
                          </svg>
                        </li>
                        <li className="highway-car">
                          <svg>
                            <use href="#sassLogo" />
                          </svg>
                        </li>
                        <li className="highway-car">
                          <svg>
                            <use href="#bootstrapLogo" />
                          </svg>
                        </li>
                        <li className="highway-car">
                          <svg>
                            <use href="#reactLogo" />
                          </svg>
                        </li>
                        <li className="highway-car">
                          <svg>
                            <use href="#reduxLogo" />
                          </svg>
                        </li>
                        <li className="highway-car">
                          <svg>
                            <use href="#nodejsLogo" />
                          </svg>
                        </li>
                        <li className="highway-car">
                          <svg>
                            <use href="#mongodbLogo" />
                          </svg>
                        </li>
                        <li className="highway-car">
                          <svg>
                            <use href="#mySQLLogo" />
                          </svg>
                        </li>
                        <li className="highway-car">
                          <svg>
                            <use href="#jestLogo" />
                          </svg>
                        </li>
                        <li className="highway-car">
                          <svg>
                            <use href="#reactRouterLogo" />
                          </svg>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>
              </div>
            </section>
          </main>
          {/* <img className='halftone halftone--left' src={halftone}></img>
          <img className='halftone halftone--right' src={halftone}></img> */}
        </div>
      </>
    );
  }
};

const mapStateToProps = state => {
  return {
    language: state.language
  };
};

const mapDispatchToProps = dispatch => {
  return {
    languageCookieDispatch: (lang) => {
      switch(lang) {
        case 'farsi':
          dispatch(switchFarsi());
          break;
        case 'english':
          dispatch(switchEnglish());
          break;
        case 'japanese':
          dispatch(switchJapanese());
          break;
      } 
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);