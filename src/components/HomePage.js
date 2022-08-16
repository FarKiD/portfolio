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
                  Read More About Me
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
                  My comprehensive <span className='neon-text'>Portfolio</span>
                  <br />
                  Showcasing a large array of my abilities.
                </p>
                <Link onClick={(e) => activateNavItem(e, '/projects')} className='second__link' to='/projects#portfolio'>
                  Read More About It
                </Link>
              </div>
              <div className='second__banner col'></div>
            </div>
            <section>
              <div className='outro row'>
                <div className='outro__boxes col'>
                  <div className='outro__content'>
                    <h4>
                      Interested in the website?
                    </h4>
                    <p>
                      Visit and explore the source code on my GitHub!
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
                      You can contact me via:
                    </h4>
                    <p>
                      Email: sajjad.eros@gmail.com
                    </p>
                    <p>
                      Cellphone: +989032371898
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