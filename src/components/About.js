import React from 'react';
import { connect } from 'react-redux';
import Cookies from 'universal-cookie';

import store from '../store/store';
import { switchJapanese, switchEnglish, switchFarsi } from '../util/languageSlice';

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
    $('html, body').css({
      'overflow-y': 'visible',
      'overflow-x': 'hidden'
    });

    if(this.state.cookieLanguage === 'farsi') {
      this.props.languageCookieDispatch('farsi');
    } else if (this.state.cookieLanguage === 'english') {
      this.props.languageCookieDispatch('english');
    } else {

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
                  <strong>Name: </strong>Sajjad Ostadebrahim
                </p>
                <p>
                  <strong>Birthdate: </strong>25 Nov. 1998
                </p>
                <p>
                  <strong>Location: </strong>Tehran, Shahriyar
                </p>
                <p>
                  <strong>Marital Status: </strong>Single
                </p>
                <p>
                  <strong>Development Experience: </strong>+3 Years
                </p>
              </div>
              <div className='profile__slogans__container'>
                <div className='profile__slogans'>
                  <h2>
                    Dedication
                  </h2>
                </div>
                <div className='profile__slogans'>
                  <h2>
                    Aspiration
                  </h2>
                </div>
                <div className='profile__slogans'>
                  <h2>
                    Intuition
                  </h2>
                </div>
              </div>
            </section>
            <section className='row info'>
              <div className='col info__biography'>
                <h3>
                  Biography
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
                    Strong Points
                  </h3>
                  <div className='info__points__items'>
                    <a>
                      Focused
                    </a>
                    <a>
                      Unflappable 
                    </a>
                    <a>
                      Disciplined
                    </a>
                  </div>
                </div>
                <div className='info__weak'>
                  <h3>
                    Weak Points
                  </h3>
                  <div className='info__points__items'>
                    <a>
                      Recluse
                    </a>
                    <a>
                      Prideful
                    </a>
                    <a>
                      Irritable
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