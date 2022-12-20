import React from 'react';
import { connect } from 'react-redux';
import Cookies from 'universal-cookie';

import store from '../store/store';
import { switchJapanese, switchEnglish, switchFarsi } from '../util/languageSlice';

import "../styles/projects.scss";
import { langCssCorrection } from "../js/langCssCorrection.js";
import scrollActivator from '../util/scrollActivator';

import { loadModalFromURL, loadAnimations } from '../js/projects';
import {Modal, Button} from 'react-bootstrap';

import kandaPic from '../images/kanda.jpg';
import appLandingPic from '../images/applanding.jpg';
import fardaPic from '../images/farda.jpg';

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ModalVisibility: false,
      cookieLanguage: new Cookies().get('language')
    }
  }
  
  componentDidMount() {
    scrollActivator();
    langCssCorrection(store.getState().language.value.language);
    loadModalFromURL(this.handleModalShow);
    loadAnimations();

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

  handleModalShow = () => {
    this.setState({
      ModalVisibility: true
    });
  };

  handleModalClose = () => {
    this.setState({
      ModalVisibility: false
    });
  };

  render() {
    return(
      <>
        <div className='container-fluid'>
          <div className='row kanda'>
            <div className='col-md-3 image-container'>
              <img className='kanda__image img-fluid' src={kandaPic} />
            </div>
            <div className='col kanda__content'>
              <h3>
                {
                  store.getState().language.value.content.projects.title.kanda
                }
              </h3>
              <p>
                {
                  store.getState().language.value.content.projects.text.kanda
                }
                <br />
                <span><small>
                  {
                    store.getState().language.value.content.projects.text.kandaDisclaimer
                  }
                </small></span>
              </p>
              <span className='h4'>
                {
                  store.getState().language.value.content.projects.text.visit
                }
              </span>
              
               &nbsp; 
              
              <a target='_blank' className='h4 content-link' href='https://kandaidea.com/'>
                {
                  store.getState().language.value.content.projects.button.kanda
                }
              </a>
              <br />
              <p className='small keywords'>
                {
                  store.getState().language.value.content.projects.text.kandaKeywords
                }
              </p>
            </div>
          </div>
          <div className='row applanding'>
            <div className='col-3 image-container applanding-container'>
              <img className='applanding__image img-fluid' src={appLandingPic} />
            </div>
            <div className='col applanding__content'>
              <h3>
                {
                  store.getState().language.value.content.projects.title.applanding
                }
              </h3>
              <p>
                {
                  store.getState().language.value.content.projects.text.applanding
                }
                <br />
                <span><small>
                  {
                    store.getState().language.value.content.projects.text.applandingDisclaimer
                  }
                </small></span>
              </p>
              <span className='h4'>
                {
                  store.getState().language.value.content.projects.text.visit
                }
              </span> 
              
              &nbsp; 
              
              <a target='_blank' className='h4 content-link' href='https://app-landing-next.vercel.app/'>
                {
                  store.getState().language.value.content.projects.button.applanding
                }
              </a>
              <br />
              <p className='small keywords'>
                {
                  store.getState().language.value.content.projects.text.applandingKeywords
                }
              </p>
            </div>
          </div>
          <div className='row farda'>
            <div className='col-3 image-container farda-container'>
              <img className='farda__image img-fluid' src={fardaPic} />
            </div>
            <div className='col farda__content'>
              <h3>
                {
                  store.getState().language.value.content.projects.title.farda
                }
              </h3>
              <p>
                {
                  store.getState().language.value.content.projects.text.farda
                }
                <br />
                <span><small>
                  {
                    store.getState().language.value.content.projects.text.fardaDisclaimer
                  }
                </small></span>
              </p>
              <span className='h4'>
                {
                  store.getState().language.value.content.projects.text.visit
                }
              </span> 
              
              &nbsp; 
              
              <a target='_blank' className='h4 content-link' href='https://farda-g4bl3dmyb-farkid.vercel.app/'>
                {
                  store.getState().language.value.content.projects.button.farda
                }
              </a>
              <br />
              <p className='small keywords'>
                {
                  store.getState().language.value.content.projects.text.fardaKeywords
                }
              </p>
            </div>
          </div>
          <div className='row others'>
            <div className='col-6 col-md mobile__border'>
              <a href='/jcards.rar'>
                {
                  store.getState().language.value.content.projects.button.jcards
                }
              </a>
              <p className='span'>
                {
                  store.getState().language.value.content.projects.text.jcards
                }
              </p>
            </div>
            <div className='col-6 col-md'>
              <a id='portfolioLink' onClick={this.handleModalShow} href='/projects#portfolio'>
                {
                  store.getState().language.value.content.projects.button.portfolio
                }
              </a>
              <p className='span'>
                {
                  store.getState().language.value.content.projects.text.portfolio
                }
              </p>
            </div>

            <div className='w-100 d-block d-md-none'></div>

            <div className='col-6 col-md mobile__border'>
              <a href='/reader'>
                {
                  store.getState().language.value.content.projects.button.reader
                }
              </a>
              <p className='span'>
                {
                  store.getState().language.value.content.projects.text.reader
                }
              </p>
            </div>
            <div className='col-6 col-md'>
              <a href='/stopwatch' target="_blank">
                {
                  store.getState().language.value.content.projects.button.stopwatch
                }
              </a>
              <p className='span'>
                {
                  store.getState().language.value.content.projects.text.stopwatch
                }
              </p>
            </div>
          </div>
          <Modal id="portfolioModal" show={this.state.ModalVisibility} onHide={this.handleModalClose}>
            <Modal.Header closeButton>
              <Modal.Title>
                Portfolio
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className='skills__container'>
                <h4>
                  Advanced skills and technologies used:
                </h4>
                <div className='row'>
                  <div className='col'>
                    SCSS
                  </div>
                  <div className='col'>
                    React.js
                  </div>
                  <div className='col'>
                    React Router
                  </div>
                  <div className='col'>
                    Redux
                  </div>
                </div>
                <div className='row'>
                  <div className='col'>
                    Node.js
                  </div>
                  <div className='col'>
                    Express
                  </div>
                  <div className='col'>
                    Webpack
                  </div>
                  <div className='col'>
                    Heroku
                  </div>
                </div>
              </div>
              <div className='modal__content'>
                <h4>
                  Additional Info:
                </h4>
                <p>
                  This is a <a href={"https://stackoverflow.com/a/36623117"}>Hybrid Website</a> using React as it's front and Node for it's server side.
                </p>
                <p>
                  I used Redux alongside some JSON to create the content of the website, therefore the website won't refresh when you change it's language. 
                </p>
                <p>
                  Also, I'm using universal cookies and by utilizing that with react, the language change will persist in your current session.
                </p>
                <p>
                  All the animations, buttons, color schemes and design are made by myself, However, the icons are obtained from various other sources.
                </p>
                <p>
                  By using client-side rendering with React Router, the website has instant reaction time on navigation.
                </p>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.handleModalClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </>
    );
  };
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

export default connect(mapStateToProps, mapDispatchToProps)(Projects);