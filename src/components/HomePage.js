import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import store from '../store/store';

import halftone from '../images/halftone.png';

import { indexLoad } from "../js/index.js";
import { rmvClassActive, activateNavItem } from "../js/header.js";

import "../styles/index.scss";

class HomePage extends React.Component {
  // makes the router to reload the script
  componentDidMount() {
    indexLoad();
    rmvClassActive();
  }

  componentWillUpdate() {
    if(store.getState().language.value.language === 'farsi') {
      $('body').css({
        'font-family': "'vazirmatn', Arial, sans-serif"
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
              <div className="col-2 intro__title">
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
              <div className="intro__text col">
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
              <div className="intro__banner col"></div>
            </div>
            <div className="second row">
              <div className="second__title col-8">
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
              <div className='second__text col'>
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
              <div className='second__banner col'></div>
            </div>
            <section>
              <div className='outro row'>
                <div className='outro__boxes col'>
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
                    GitHub
                  </a>
                </div>
                <div className='outro__boxes col'>
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
                    Telegram
                  </a>
                </div>
              </div>
            </section>
          </main>
          <img className='halftone halftone--left' src={halftone}></img>
          <img className='halftone halftone--right' src={halftone}></img>
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

export default connect(mapStateToProps)(HomePage);