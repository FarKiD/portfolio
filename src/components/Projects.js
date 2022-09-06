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
import shopPic from '../images/shop.jpg';

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
    } else {
      // japanese
    }
  }

  componentWillUpdate() {
    if(store.getState().language.value.language === 'farsi') {
      langCssCorrection('farsi');
    } else if (store.getState().language.value.language === 'english') {
      langCssCorrection('english');
    } else {
      // japanese?
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
              
              <a className='h4 content-link' href='https://kandaidea.com/'>
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
          <div className='row shop'>
            <div className='col-3 image-container'>
              <img className='shop__image img-fluid' src={shopPic} />
            </div>
            <div className='col shop__content'>
              <h3>
                {
                  store.getState().language.value.content.projects.title.shop
                }
              </h3>
              <p>
                {
                  store.getState().language.value.content.projects.text.shop
                }
                <br />
                <span><small>
                  {
                    store.getState().language.value.content.projects.text.shopDisclaimer
                  }
                </small></span>
              </p>
              <span className='h4'>
                {
                  store.getState().language.value.content.projects.text.visit
                }
              </span> 
              
              &nbsp; 
              
              <a className='h4 content-link' href='https://ostadebrahim-shop.herokuapp.com/'>
                {
                  store.getState().language.value.content.projects.button.shop
                }
              </a>
              <br />
              <p className='small keywords'>
                {
                  store.getState().language.value.content.projects.text.shopKeywords
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
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleModalClose}>
                Close
              </Button>
              <Button variant="primary" onClick={this.handleModalClose}>
                Save Changes
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