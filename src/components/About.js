import React from 'react';
import { connect } from 'react-redux';
import Cookies from 'universal-cookie';

import store from '../store/store';
import { switchJapanese, switchEnglish, switchFarsi } from '../util/languageSlice';

import { langCssCorrection } from "../js/langCssCorrection.js";

import "../styles/about.scss";

import mySelfPic from '../images/myself.png';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cookieLanguage: new Cookies().get('language')
    }
  }

  componentDidMount() {
    langCssCorrection(store.getState().language.value.language);

    $('html, body').css({
      'overflow-y': 'visible',
      'overflow-x': 'hidden'
    });

    if(this.state.cookieLanguage === 'farsi') {
      this.props.languageCookieDispatch('farsi');
    } else if (this.state.cookieLanguage === 'english') {
      this.props.languageCookieDispatch('english');
    } else if (this.state.cookieLanguage === 'japanese') {
      this.props.languageCookieDispatch('japanese');
    }
  }

  componentDidUpdate() {
    if(store.getState().language.value.language === 'farsi') {
      langCssCorrection('farsi');
    } else if (store.getState().language.value.language === 'english') {
      langCssCorrection('english');
    } else {
      langCssCorrection('japanese');
    }
  }

  render() {
    return(
      <>
        <div className='container-fluid'>
          <main>
            <section className='profile'>
              <div className='profile__image__container'>
                <img className='profile__image' src={mySelfPic} />
              </div>
              <div className='profile__info'>
                <p>
                  <strong>
                    {
                      store.getState().language.value.content.about.name.title
                    }
                  </strong>
                  {
                    store.getState().language.value.content.about.name.text
                  }
                </p>
                <p>
                  <strong>
                    {
                      store.getState().language.value.content.about.bday.title
                    }
                  </strong>
                  {
                    store.getState().language.value.content.about.bday.text
                  }
                </p>
                <p>
                  <strong>
                    {
                      store.getState().language.value.content.about.address.title
                    }
                  </strong>
                  {
                    store.getState().language.value.content.about.address.text
                  } 
                </p>
                <p>
                  <strong>
                    {
                      store.getState().language.value.content.about.status.title
                    }
                  </strong>
                  {
                    store.getState().language.value.content.about.status.text
                  }
                </p>
                <p>
                  <strong>
                    {
                      store.getState().language.value.content.about.exp.title
                    }
                  </strong>
                  {
                    store.getState().language.value.content.about.exp.text
                  }
                </p>
              </div>
              <div className='profile__slogans__container'>
                <div className='profile__slogans'>
                  <h2>
                    {
                      store.getState().language.value.content.about.slogan.dedication
                    }
                  </h2>
                </div>
                <div className='profile__slogans'>
                  <h2>
                    {
                      store.getState().language.value.content.about.slogan.aspiration
                    }
                  </h2>
                </div>
                <div className='profile__slogans'>
                  <h2>
                    {
                      store.getState().language.value.content.about.slogan.intuition
                    }
                  </h2>
                </div>
              </div>
            </section>
            <section className='row info'>
              <div className='col info__biography'>
                <h3>
                  {
                    store.getState().language.value.content.about.bio.title
                  }
                </h3>
                <p>
                  {
                    store.getState().language.value.content.about.bio.text
                  }
                </p>
              </div>
              <div className='w-100 d-lg-none d-block'></div>
              <div className='col info__points'>
                <div className='info__strong'>
                  <h3>
                    {
                      store.getState().language.value.content.about.point.strong.title
                    }
                  </h3>
                  <div className='info__points__items'>
                    <a>
                      {
                        store.getState().language.value.content.about.point.strong.focused
                      }
                    </a>
                    <a>
                      {
                        store.getState().language.value.content.about.point.strong.unflappable
                      }
                    </a>
                    <a>
                      {
                        store.getState().language.value.content.about.point.strong.disciplined
                      }
                    </a>
                  </div>
                </div>
                <div className='info__weak'>
                  <h3>
                    {
                      store.getState().language.value.content.about.point.weak.title
                    }
                  </h3>
                  <div className='info__points__items'>
                    <a>
                      {
                        store.getState().language.value.content.about.point.weak.recluse
                      }
                    </a>
                    <a>
                      {
                        store.getState().language.value.content.about.point.weak.prideful
                      }
                    </a>
                    <a>
                      {
                        store.getState().language.value.content.about.point.weak.irritable
                      }
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </main>
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

export default connect(mapStateToProps, mapDispatchToProps)(About);